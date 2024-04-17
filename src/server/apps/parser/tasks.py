from datetime import datetime, timedelta

from celery import shared_task

from server.apps.users.models import User
from server.apps.parser.models import ParsingData
from .parser import WebsiteParser, SaveWebsiteParser
from .builder import ExcelEmailSender


@shared_task
def send_parsing_task():
    """
    Отправка сообщения о заданном вопросе на сайте.
    """

    users = User.objects.all()

    for user in users:
        parser_result = WebsiteParser().parse(user.pk)
        SaveWebsiteParser().save_data(parser_result, user.pk)
        sender = ExcelEmailSender(parser_result)
        sender.send_email(user.email)


@shared_task
def clear_tender():
    ParsingData.objects.filter(stop_date__lte=datetime.now().date() - timedelta(days=30)).delete()
