from django.contrib import admin

from listentothefish.homepage.models import Event, EventType

class EventAdmin(admin.ModelAdmin):
	pass

class EventTypeAdmin(admin.ModelAdmin):
    pass


admin.site.register(Event, EventAdmin)
admin.site.register(EventType, EventTypeAdmin)
