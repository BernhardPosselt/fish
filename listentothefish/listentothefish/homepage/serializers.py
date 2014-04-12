import markdown

from django.conf import settings

from rest_framework import serializers

from listentothefish.homepage.models import Event, EventType


class EventSerializer(serializers.ModelSerializer):
    formatted_date = serializers.CharField(source='formatted_date', read_only=True)

    class Meta:
        model = Event

    def transform_image(self, obj, value):
        return settings.MEDIA_URL + value  # to not have to deal with the url

    def transform_description(self, obj, value):
        return markdown.markdown(value)


class EventTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventType

