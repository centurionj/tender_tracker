from django.contrib import admin

from server.apps.search.models import SearchSettings


@admin.register(SearchSettings)
class SubscriptionAdmin(admin.ModelAdmin):
    list_display = ('title',)
