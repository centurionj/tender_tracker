from rest_framework import viewsets, permissions
from drf_yasg.utils import swagger_auto_schema

from server.apps.search.models import SearchSettings
from .serializer import SearchSettingsSerializer


class SearchSettingsViewSet(viewsets.ModelViewSet):
    """
    ViewSet для модели SearchSettings
    """
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = SearchSettingsSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        return SearchSettings.objects.filter(user=self.request.user)

    @swagger_auto_schema(
        request_body=SearchSettingsSerializer,
        responses={200: SearchSettingsSerializer}
    )
    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    @swagger_auto_schema(
        responses={200: SearchSettingsSerializer(many=True)}
    )
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    @swagger_auto_schema(
        responses={200: SearchSettingsSerializer}
    )
    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)

    @swagger_auto_schema(
        request_body=SearchSettingsSerializer,
        responses={200: SearchSettingsSerializer}
    )
    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)

    @swagger_auto_schema(
        responses={200: SearchSettingsSerializer}
    )
    def partial_update(self, request, *args, **kwargs):
        return super().partial_update(request, *args, **kwargs)

    @swagger_auto_schema(
        responses={204: None}
    )
    def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)
