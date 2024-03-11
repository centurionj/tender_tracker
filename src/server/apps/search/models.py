from django.db import models


class SearchSettings(models.Model):
    title = models.CharField('Название настройки для поиска', max_length=50, null=True, blank=True)
    search_settings = models.JSONField('JSON с настройками для поиска', )

