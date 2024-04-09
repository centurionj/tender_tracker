from django.urls import include, path

from .users import urls as urls_users
from .parser import urls as urls_parsing
from .search import urls as urls_search

urlpatterns = [
    path('users/', include(urls_users)),
    path('parsing/', include(urls_parsing)),
    path('search/', include(urls_search)),
]
