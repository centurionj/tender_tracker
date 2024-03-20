from django.db import models

from server.apps.users.models import User


class ParsingData(models.Model):
    """
    Модель для спарсиных аукционов
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    number = models.CharField('Номер заявки', max_length=255, )
    url = models.URLField('Ссылка на заявку')
    status = models.CharField('Статус заявки', max_length=25, )
    subject = models.CharField('Объект закупки', max_length=255, )
    customer = models.CharField('Заказчик', max_length=255, )
    start_date = models.DateField('Размещено')
    change_date = models.DateField('Обновлено')
    stop_date = models.DateField('Окончание подачи заявок')
    price = models.CharField('Начальная цена', max_length=255,)
    notice = models.TextField('Заметки', null=True, blank=True)

    class Meta:
        verbose_name_plural = 'Аукционы'
        verbose_name = 'Аукцион'
        ordering = ['start_date', 'price', 'stop_date']

    def __str__(self):
        return self.number
