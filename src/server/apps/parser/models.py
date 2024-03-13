from django.db import models


class ParsingData(models.Model):
    number = models.CharField('Номер заявки', max_length=255, )
    url = models.URLField('Ссылка на заявку')
    status = models.CharField('Статус заявки', max_length=25, )
    subject = models.CharField('Объект закупки', max_length=255, )
    customer = models.CharField('Заказчик', max_length=255, )
    start_date = models.DateField('Размещено')
    change_date = models.DateField('Обновлено')
    stop_date = models.DateField('Окончание подачи заявок')
    price = models.DecimalField('Начальная цена', max_digits=20, decimal_places=2)

    class Meta:
        verbose_name_plural = 'Аукционы'
        verbose_name = 'Аукцион'
        ordering = ['title']

    def __str__(self):
        return self.number
