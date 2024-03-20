import datetime
import requests
from bs4 import BeautifulSoup

from server.apps.parser.models import ParsingData
from server.apps.search.models import SearchSettings
from server.apps.users.models import User


class WebsiteParser:
    COMMON_URL = "http://localhost:"

    HEADERS = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.3'
    }

    def __init__(self, ):
        self.common_url = WebsiteParser.COMMON_URL
        self.headers = WebsiteParser.HEADERS

    def _make_url(self, user_id: int) -> str:
        """
        Составляет и возвращает ссылку со всеми гет параметрами
        :param settings: настройки пользователя
        :return: str ссылка на запрос
        """
        url = self.common_url

        settings = SearchSettings.objects.filter(user__pk=user_id).first()
        if settings:
            params = "&".join([f"{key}={value}" for key, value in settings.items()])
            url += "?" + params
        return url

    def parse(self, user_id: int) -> list[dict]:
        data = []
        url = self._make_url(user_id)

        try:
            r = requests.get(url, headers=self.headers)
            soup = BeautifulSoup(r.content, 'lxml')

            all_div = soup.find_all('div', class_='row no-gutters registry-entry__form mr-0')

            for item in all_div:
                entry = self._parse_item(item)
                if entry:
                    data.append(entry)

        except Exception as e:
            print(str(e))

        return data

    def _parse_item(self, item) -> dict:
        try:
            number = item.find('div', class_='registry-entry__header-mid__number').find('a').text.strip()
            url = 'https://zakupki.gov.ru' + str(
                item.find('div', class_='registry-entry__header-mid__number').find('a').attrs['href']
            )
            status = item.find('div', class_='registry-entry__header-mid__title text-normal').text.strip()
            subject = item.find('div', class_='registry-entry__body-block').find('div',
                                                                                 class_='registry-entry__body-value').text.strip()
            customer = item.find('div', class_='registry-entry__body-href').find('a').text.strip()

            data_block = item.find('div', class_='data-block')

            start_date = data_block.find('div', class_='data-block__title',
                                         string='Размещено').find_next_sibling(
                'div',
                class_='data-block__value').text.strip()
            change_date = data_block.find('div', class_='data-block__title', string='Обновлено').find_next_sibling(
                'div',
                class_='data-block__value').text.strip()
            stop_date = data_block.find('div', class_='data-block__title',
                                        string='Окончание подачи заявок').find_next_sibling('div',
                                                                                            class_='data-block__value').text.strip()
            price = item.find('div', class_='price-block__value').text.strip()

            entry = {
                'number': number,
                'url': url,
                'status': status,
                'subject': subject,
                'customer': customer,
                'start_date': datetime.datetime.strptime(start_date, '%d.%m.%Y').date(),
                'change_date': datetime.datetime.strptime(change_date, '%d.%m.%Y').date(),
                'stop_date': datetime.datetime.strptime(stop_date, '%d.%m.%Y').date(),
                'price': price
            }
            return entry

        except Exception as e:
            print(str(e))
            return None


class SaveWebsiteParser:
    """
    Класс для сохранения или обновления аукционов
    """

    @classmethod
    def save_data(cls, data: list, user_id: int) -> None:
        try:
            user = User.objects.get(pk=user_id)

            for item in data:
                existing_entry = ParsingData.objects.filter(number=item['number']).first()

                if existing_entry:
                    is_changed = any(getattr(existing_entry, field) != value for field, value in item.items() if
                                     field != 'number')

                    if is_changed:
                        for field, value in item.items():
                            if field != 'number':
                                setattr(existing_entry, field, value)
                        existing_entry.save()
                else:
                    ParsingData.objects.create(user=user, **item)

        except Exception as e:
            print(str(e))
