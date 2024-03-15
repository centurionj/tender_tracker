from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from server.apps.users.models import User
from server.api.v1.users.serializer import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
