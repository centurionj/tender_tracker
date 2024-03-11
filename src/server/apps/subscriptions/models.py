from django.db import models
from django.core.validators import MinValueValidator


class Subscription(models.Model):
    title = models.CharField('Название подписки', max_length=50, null=True, blank=True)
    price = models.DecimalField('Стоимость подписки', max_digits=10, validators=[MinValueValidator(0)],
                                decimal_places=2, null=False, blank=False)
