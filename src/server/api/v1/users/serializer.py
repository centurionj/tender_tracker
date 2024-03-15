from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError

from rest_framework import serializers
from drf_writable_nested import WritableNestedModelSerializer

from server.api.v1.parser.serializer import ParsingDataSerializer
from server.api.v1.search.serializer import SearchSettingsSerializer
from server.apps.users.models import User


class UserSerializer(WritableNestedModelSerializer):
    search_settings = SearchSettingsSerializer(required=False)
    parse_data = ParsingDataSerializer(required=False)

    def __validate_password(self, value):
        # Валидация пароля
        try:
            validate_password(value)
        except ValidationError as e:
            raise serializers.ValidationError(str(e))
        return value

    def __validate_email(self, value):
        # Валидация email
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Пользователь с таким email уже существует")
        return value

    def create(self, validated_data):
        # Создание нового пользователя
        password = self.__validate_password(validated_data.pop('password'))
        email = self.__validate_email(validated_data.pop('email'))
        user = User.objects.create(**validated_data)
        user.set_password(password)
        user.save()
        return user

    def update(self, instance, validated_data):
        # Обновление существующего пользователя
        if 'password' in validated_data:
            password = self.__validate_password(validated_data.pop('password'))
            instance.set_password(password)  # Обновляем пароль
        return super().update(instance, validated_data)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'first_name', 'last_name', 'subscription', 'search_settings', 'parse_data',
                  'start_date', 'stop_date', 'is_activate']
        extra_kwargs = {
            'password': {'write_only': True},  # Пароль только для записи - читать нельзя
        }
