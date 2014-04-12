from django.conf.urls import patterns, include, url
from django.views.generic import TemplateView

from listentothefish.homepage.views import EventAPI, EventTypesAPI

urlpatterns = patterns('',
	url(r'^$', TemplateView.as_view(template_name='homepage/index.html'), name='index'),
	url(r'^api/1.0/events/$', EventAPI.as_view()),
    url(r'^api/1.0/events/types/$', EventTypesAPI.as_view())
)
