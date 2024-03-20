# Generated by Django 4.2.5 on 2024-03-20 13:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ParsingData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.CharField(max_length=255, verbose_name='Номер заявки')),
                ('url', models.URLField(verbose_name='Ссылка на заявку')),
                ('status', models.CharField(max_length=25, verbose_name='Статус заявки')),
                ('subject', models.CharField(max_length=255, verbose_name='Объект закупки')),
                ('customer', models.CharField(max_length=255, verbose_name='Заказчик')),
                ('start_date', models.DateField(verbose_name='Размещено')),
                ('change_date', models.DateField(verbose_name='Обновлено')),
                ('stop_date', models.DateField(verbose_name='Окончание подачи заявок')),
                ('price', models.DecimalField(decimal_places=2, max_digits=20, verbose_name='Начальная цена')),
                ('notice', models.TextField(verbose_name='Заметки')),
            ],
            options={
                'verbose_name': 'Аукцион',
                'verbose_name_plural': 'Аукционы',
                'ordering': ['start_date', 'price', 'stop_date'],
            },
        ),
    ]
