from django.conf import settings

from rest_framework import serializers

from listentothefish.homepage.models import Event


class EventSerializer(serializers.ModelSerializer):
	class Meta:
		model = Event

	def transform_image(self, obj, value):
		return settings.MEDIA_URL + value  # to not have to deal with the url