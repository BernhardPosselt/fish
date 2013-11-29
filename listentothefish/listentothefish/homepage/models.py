from django.db import models
from django.utils.translation import ugettext as _


# Create your models here.
class Event(models.Model):
    date = models.DateTimeField(_('Datum'))
    title = models.CharField(_('Titel'), max_length=250)
    place = models.CharField(_('Ort'), max_length=250)
    description = models.TextField(_('Beschreibung'))
    last_modified = models.DateTimeField(_('Letzte Bearbeitung'), auto_now=True)
    image = models.ImageField(_('Bild'), upload_to='events')

    def __str__(self):
        return self.title