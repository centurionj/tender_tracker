from django.contrib import admin

from server.apps.search.models import SearchSettings


@admin.register(SearchSettings)
class SearchSettingsAdmin(admin.ModelAdmin):
    list_display = ('title',)
