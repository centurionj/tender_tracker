from django.contrib import admin

from server.apps.parser.models import ParsingData


@admin.register(ParsingData)
class SubscriptionAdmin(admin.ModelAdmin):
    list_display = ('id', 'number',)
