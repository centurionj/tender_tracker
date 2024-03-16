from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from server.apps.users.models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'last_name', 'first_name', 'username', 'is_activate')
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        (_('Personal info'), {'fields': (
            'first_name',
            'last_name',
            'email',
            'is_activate',
            'search_settings',
        )}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined',)}),
    )
    readonly_fields = ('last_login', 'date_joined',)
