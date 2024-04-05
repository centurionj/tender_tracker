from django.contrib import admin
from django.contrib.auth.models import Group
from django.utils.translation import gettext_lazy as _

from server.apps.users.models import User
from server.apps.search.models import SearchSettings
from server.apps.parser.models import ParsingData


class SearchSettingsInline(admin.TabularInline):
    model = SearchSettings


class ParsingDataInline(admin.TabularInline):
    model = ParsingData


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'last_name', 'first_name', 'email')
    search_fields = ('last_name', 'first_name', 'email')
    list_display_links = list_display
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal info'), {'fields': (
            'first_name',
            'last_name',
            'is_active',
        )}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined',)}),
    )
    readonly_fields = ('last_login', 'date_joined',)
    inlines = [SearchSettingsInline, ParsingDataInline]


admin.site.unregister(Group)
