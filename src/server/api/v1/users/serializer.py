from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError

from rest_framework import serializers
from drf_writable_nested import WritableNestedModelSerializer

from server.api.v1.parser.serializer import ParsingDataSerializer
from server.api.v1.search.serializer import SearchSettingsSerializer
from server.apps.users.models import User


class UserSerializer(WritableNestedModelSerializer):
    """
    Serializer пользователя
    """
    search_settings = SearchSettingsSerializer(required=False)
    parse_data = ParsingDataSerializer(required=False)

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
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Пользователь с таким email уже существует")
        return value

    def create(self, validated_data):
        # Создание нового пользователя
        password = self._validate_password(validated_data.pop('password'))
        email = self._validate_email(validated_data['email'])
        user = User.objects.create(**validated_data)
        user.set_password(password)
        user.save()
        return user

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'username', 'email', 'password', 'search_settings',
                  'parse_data', 'is_activate', 'need_to_send_docs']
        extra_kwargs = {
            'password': {'write_only': True},  # Пароль только для записи - читать нельзя
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
            'password': {'required': False, 'write_only': True},  # Пароль необязателен при обновлении
        }
