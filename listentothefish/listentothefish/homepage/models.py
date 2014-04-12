from django.db import models
from django.utils.translation import ugettext as _
from django.template.defaultfilters import date as _date

class Event(models.Model):
    date = models.DateTimeField(_('Datum'))
    title = models.CharField(_('Titel'), max_length=250)
    place = models.CharField(_('Ort'), max_length=250)
    short_description = models.CharField(_('Kurzbeschreibung'), max_length=50)
    description = models.TextField(_('Beschreibung'))
    last_modified = models.DateTimeField(_('Letzte Bearbeitung'), auto_now=True)
    image = models.ImageField(_('Bild'), upload_to='events', blank=True)
    type = models.ForeignKey('EventType')

    def __str__(self):
        return self.title

    def formatted_date(self):
        return _date(self.date, 'D')



class EventType(models.Model):
    name = models.CharField(_('Vortragstyp'), max_length=25)
    color = models.CharField(_('Farbe (zB. #225566 oder red)'), max_length=25)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Eventart'
        verbose_name_plural = 'Eventarten'