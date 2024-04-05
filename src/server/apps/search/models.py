from django.db import models
from server.apps.users.models import User


class SearchSettings(models.Model):
    """
    Модель для сохранения пользовательских настроек поиска
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField('Название настройки для поиска', max_length=50, null=True, blank=True)
    search_settings = models.JSONField('JSON с настройками для поиска', )

    class Meta:
        verbose_name_plural = 'Настройки поиска'
        verbose_name = 'Настройка поиска'
        ordering = ['id']

    def __str__(self):
        return self.title
