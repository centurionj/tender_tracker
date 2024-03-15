from rest_framework import serializers

from server.apps.search.models import SearchSettings


class SearchSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SearchSettings
        fields = '__all__'
