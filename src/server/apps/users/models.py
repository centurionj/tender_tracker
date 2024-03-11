from django.contrib.auth.models import AbstractUser
from django.db import models

from server.apps.search.models import SearchSettings
from server.apps.subscriptions.models import Subscription


class User(AbstractUser):
    """Модель для пользователей"""
    subscription = models.ForeignKey(Subscription, related_name='user_subscription', on_delete=models.PROTECT,
                                     verbose_name='Подписка')
    search_settings = models.ForeignKey(SearchSettings, on_delete=models.PROTECT, related_name='user_search',
                                        verbose_name='Настройки поиска')
    start_date = models.DateTimeField('День старта подписки', null=True, blank=True)
    stop_date = models.DateTimeField('День окончания подписки', null=True, blank=True)
    is_activate = models.BooleanField('Действительность подписки', default=True)
