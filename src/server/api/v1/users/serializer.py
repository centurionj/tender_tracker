from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from rest_framework import serializers
from server.apps.users.models import User

class UserSerializer(serializers.ModelSerializer):
    def _validate_password(self, value):
        try:
            validate_password(value)
        except ValidationError as e:
            raise serializers.ValidationError(str(e))
        return value

    def _validate_email(self, value, instance=None):
        if instance and instance.email == value:
            raise serializers.ValidationError("Новый email должен отличаться от старого")
        return value

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User.objects.create_user(password=password, **validated_data)
        return user

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        if password:
            instance.set_password(self._validate_password(password))
        if 'email' in validated_data:
            instance.email = self._validate_email(validated_data.pop('email'), instance)
        return super().update(instance, validated_data)

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email', 'password', 'is_active', 'is_staff']
        extra_kwargs = {
            'email': {'required': False, 'write_only': False},
            'password': {'required': False, 'write_only': True},
        }
