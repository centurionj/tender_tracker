from django.contrib import admin

from server.apps.parser.models import ParsingData


@admin.register(ParsingData)
class ParsingDataAdmin(admin.ModelAdmin):
    list_display = ('id', 'number',)
