from rest_framework import serializers

from server.apps.parser.models import ParsingData


class ParsingDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ParsingData
        fields = '__all__'
