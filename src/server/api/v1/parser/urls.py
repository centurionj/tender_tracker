from rest_framework.routers import DefaultRouter

from server.api.v1.parser.views import ParsingDataViewSet

router = DefaultRouter()
router.register('', ParsingDataViewSet, basename='parsing_view_set')

urlpatterns = []

urlpatterns += router.urls
