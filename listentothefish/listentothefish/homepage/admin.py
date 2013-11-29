from django.contrib import admin

from listentothefish.homepage.models import Event

class EventAdmin(admin.ModelAdmin):
	pass

admin.site.register(Event, EventAdmin)
