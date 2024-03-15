from rest_framework import serializers
from drf_writable_nested import WritableNestedModelSerializer

from server.api.v1.parser.serializer import ParsingDataSerializer
from server.api.v1.search.serializer import SearchSettingsSerializer

from server.apps.users.models import User


class UserSerializer(WritableNestedModelSerializer, serializers.ModelSerializer):
    search_settings = SearchSettingsSerializer(required=False)
    parse_data = ParsingDataSerializer(required=False)

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'subscription', 'search_settings', 'parse_data',
                  'start_date', 'stop_date', 'is_activate']
