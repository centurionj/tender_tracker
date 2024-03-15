from django.db import models


class UserSubscription(models.TextChoices):
    """Подписка для юзеров"""
    FREE = 'free', 'бесплатная версия'
    TRIAL = 'trial', 'пробный период'
    BASE = 'base', 'базовая версия'
    FULL = 'full', 'расширенная версия'
