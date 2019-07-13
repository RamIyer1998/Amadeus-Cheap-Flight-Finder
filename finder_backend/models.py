from django.db import models

# Create your models here.


class Flight(models.Model):
    origin = models.CharField(max_length=3)
    destination = models.CharField(max_length=3)
    departure_date = models.CharField(max_length=10)
    return_date = models.CharField(max_length=10, blank=True)
