from django.shortcuts import render
from django.views.generic import ListView
from django.http import Http404

from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework import status

from listentothefish.homepage.models import Event, EventType
from listentothefish.homepage.serializers import EventSerializer, EventTypeSerializer


class  EventAPI(ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class  EventTypesAPI(ListAPIView):
    queryset = EventType.objects.all()
    serializer_class = EventTypeSerializer



