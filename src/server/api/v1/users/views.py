from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny

from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema

from server.apps.users.models import User
from server.api.v1.users.serializer import UserSerializer, UserUpdateSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API эндпоинт на crud пользователя.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @swagger_auto_schema(request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        required=['email', 'first_name', 'last_name', 'password'],
        properties={
            'email': openapi.Schema(type=openapi.FORMAT_EMAIL),
            'first_name': openapi.Schema(type=openapi.TYPE_STRING),
            'last_name': openapi.Schema(type=openapi.TYPE_STRING),
            'password': openapi.Schema(type=openapi.FORMAT_PASSWORD),
        }
    ))
    def create(self, request, *args, **kwargs):
        """
        Создать пользователя.
        """
        return super().create(request, *args, **kwargs)

    @swagger_auto_schema(request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        properties={
            'first_name': openapi.Schema(type=openapi.TYPE_STRING),
            'last_name': openapi.Schema(type=openapi.TYPE_STRING),
            'email': openapi.Schema(type=openapi.FORMAT_EMAIL),
        }
    ))
    def update(self, request, *args, **kwargs):
        """
        Обновить пользователя.
        """
        self.serializer_class = UserUpdateSerializer
        return super().update(request, *args, **kwargs)

    def get_permissions(self):
        permissions = {
            'list': [IsAuthenticated],
            'retrieve': [IsAuthenticated],
            'update': [IsAuthenticated],
            'partial_update': [IsAuthenticated],
            'destroy': [IsAuthenticated],
        }
        return [permission() for permission in permissions.get(self.action, [AllowAny])]
