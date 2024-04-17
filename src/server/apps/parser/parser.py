import datetime
from django.shortcuts import get_object_or_404
import requests
from bs4 import BeautifulSoup

from server.apps.parser.models import ParsingData
from server.apps.search.models import SearchSettings
from server.apps.users.models import User
from .constants import COOKIES, HEADERS


class WebsiteParser:
    URL = 'https://zakupki.gov.ru/epz/order/extendedsearch/results.html'


    def __init__(self):
        self.url = WebsiteParser.URL
        self.headers = HEADERS
        self.cookies = COOKIES

    def parse(self, user_id: int) -> list[dict]:
        data = []
        url = self.url

        params = get_object_or_404(SearchSettings, user_id=user_id)

        try:
            r = requests.get(url, headers=self.headers, cookies=self.cookies, params=params.search_settings)
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
