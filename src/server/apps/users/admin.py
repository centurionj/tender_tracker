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
            'subscription',
            'is_activate',
            'search_settings',
        )}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined', 'start_date', 'stop_date')}),
    )
    readonly_fields = ('subscription', 'last_login', 'date_joined', 'start_date', 'stop_date')
