from django.contrib.auth.models import AbstractUser
from django.db import models

from server.apps.search.models import SearchSettings
from server.apps.parser.models import ParsingData



class User(AbstractUser):
    """Модель  пользователей"""

    search_settings = models.ForeignKey(SearchSettings, on_delete=models.PROTECT, related_name='user_search',
                                        verbose_name='Настройки поиска', null=True, blank=True)
    parse_data = models.ForeignKey(ParsingData, on_delete=models.PROTECT, related_name='user_parse_data',
                                   verbose_name='Найденные аукционы', null=True, blank=True)
    is_activate = models.BooleanField('Активированный', default=False)

    def __str__(self):
        return f'{self.get_full_name()}'

    class Meta:
        verbose_name_plural = 'Пользователи'
        verbose_name = 'Пользователь'
        ordering = ['last_name', 'first_name']
