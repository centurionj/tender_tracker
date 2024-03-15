from django.db import models


class SearchSettings(models.Model):
    """
    Модель для сохранения пользовательских настроек поиска
    """
    title = models.CharField('Название настройки для поиска', max_length=50, null=True, blank=True)
    search_settings = models.JSONField('JSON с настройками для поиска', )

    class Meta:
        verbose_name_plural = 'Настройки поиска'
        verbose_name = 'Настройка поиска'
        ordering = ['id']

    def __str__(self):
        return self.title
