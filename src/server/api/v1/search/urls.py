from rest_framework.routers import DefaultRouter

from server.api.v1.search.views import SearchSettingsViewSet

router = DefaultRouter()
router.register('', SearchSettingsViewSet, basename='search_view_set')

urlpatterns = []

urlpatterns += router.urls
