from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema

from server.apps.parser.models import ParsingData
from server.api.v1.parser.serializer import ParsingDataSerializer


class ParsingDataViewSet(viewsets.ViewSet):
    """
    APIViewSet аукционов
    """
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(responses={200: ParsingDataSerializer(many=True)})
    def list(self, request):
        """
        Получение всех записей аукционов текущего пользователя
        """
        parsing_data = ParsingData.objects.filter(user=request.user)
        serializer = ParsingDataSerializer(parsing_data, many=True)
        return Response(serializer.data)

    @swagger_auto_schema(request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        required=['notice'],
        properties={
            'notice': openapi.Schema(type=openapi.TYPE_STRING),
        }
    ),responses={200: ParsingDataSerializer(many=True)})
    def update(self, request, pk=None):
        """
        Обновление поля notice для конкретной записи аукциона
        """
        try:
            parsing_data = ParsingData.objects.get(pk=pk)
        except ParsingData.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        # Получаем только поле notice из запроса
        notice = request.data.get('notice')

        parsing_data.notice = notice
        parsing_data.save()
        serializer = ParsingDataSerializer(parsing_data)
        return Response(serializer.data)

    @swagger_auto_schema(responses={204: 'No Content'})
    def destroy(self, request, pk=None):
        """
        Удаление конкретной записи аукциона
        """
        try:
            parsing_data = ParsingData.objects.get(pk=pk)
        except ParsingData.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        parsing_data.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
