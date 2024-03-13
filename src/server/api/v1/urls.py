from django.urls import include, path

from .users import urls as urls_users

urlpatterns = [
    path('users/', include(urls_users)),
]
