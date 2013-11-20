from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', include('listentothefish.homepage.urls', namespace='homepage', 
        app_name='homepage')),    
)