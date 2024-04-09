from rest_framework import serializers

from server.apps.search.models import SearchSettings


class SearchSettingsSerializer(serializers.ModelSerializer):
    """
    Serializer для модели SearchSettings
    """
    user = serializers.PrimaryKeyRelatedField(read_only=True, default=serializers.CurrentUserDefault())

    class Meta:
        model = SearchSettings
        fields = '__all__'
