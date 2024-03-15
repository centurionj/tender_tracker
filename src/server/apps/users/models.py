from django.contrib.auth.models import AbstractUser
from django.db import models

from server.apps.search.models import SearchSettings
from server.apps.parser.models import ParsingData
from server.apps.users.user_subscription_enums import UserSubscription


class User(AbstractUser):
    """Модель для пользователей"""
    subscription = models.CharField('Версия подписки', max_length=15, choices=UserSubscription.choices,
                                    default=UserSubscription.FREE)
    search_settings = models.ForeignKey(SearchSettings, on_delete=models.PROTECT, related_name='user_search',
                                        verbose_name='Настройки поиска', null=True, blank=True)
    parse_data = models.ForeignKey(ParsingData, on_delete=models.PROTECT, related_name='user_parse_data',
                                   verbose_name='Найденные аукционы', null=True, blank=True)
    start_date = models.DateTimeField('День старта подписки', null=True, blank=True)
    stop_date = models.DateTimeField('День окончания подписки', null=True, blank=True)
    is_activate = models.BooleanField('Действительность подписки', default=True)

    class Meta:
        verbose_name_plural = 'Пользователи'
        verbose_name = 'Пользователь'
        ordering = ['last_name', 'first_name']

    def __str__(self):
        return f'{self.get_full_name()}'
