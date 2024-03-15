from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny
from server.apps.users.models import User
from server.api.v1.users.serializer import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API эндпоинт на crud пользователя.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):
        permissions = {
            'list': [IsAuthenticated],
            'retrieve': [IsAuthenticated],
            'update': [IsAuthenticated],
            'partial_update': [IsAuthenticated],
            'destroy': [IsAuthenticated],
        }
        return [permission() for permission in permissions.get(self.action, [AllowAny])]
