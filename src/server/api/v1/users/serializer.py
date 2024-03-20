from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError

from rest_framework import serializers

from server.apps.users.models import User


class UserSerializer(serializers.ModelSerializer):
    """
    Serializer пользователя
    """

    # Валидация пароля
    def _validate_password(self, value):
        # Валидация пароля
        try:
            validate_password(value)
        except ValidationError as e:
            raise serializers.ValidationError(str(e))
        return value

    # Валидация email
    def _validate_email(self, value, instance=None):
        if instance is not None and instance.email == value:
            raise serializers.ValidationError("Новый email должен отличаться от старого")
        return value

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User.objects.create_user(password=password, **validated_data)  # Передаем пароль в метод create_user
        return user

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email', 'password', 'is_active', 'is_staff']
        extra_kwargs = {
            'password': {'write_only': True},
        }


class UserUpdateSerializer(UserSerializer):
    """
    Serializer для обновления данных пользователя без пароля
    """

    # Обновление существующего пользователя
    def update(self, instance, validated_data):
        if 'password' in validated_data:
            password = self._validate_password(validated_data.pop('password'))
            instance.set_password(password)
        if 'email' in validated_data:
            email = self._validate_email(validated_data.pop('email'), instance)
            instance.email = email
        return super().update(instance, validated_data)

    class Meta(UserSerializer.Meta):
        extra_kwargs = {
            'email': {'required': False, 'write_only': False},  # email необязателен при обновлении
            'password': {'required': False, 'write_only': True},  # Пароль необязателен при обновлении
        }
