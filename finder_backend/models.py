from django.db import models

# Create your models here.


class Flight(models.Model):
    origin = models.CharField(max_length=3)
    destination = models.CharField(max_length=3)
    departure_date = models.CharField(max_length=10)
    return_date = models.CharField(max_length=10, blank=True)
    price = models.IntegerField(default=0)


class RoundTrip(models.Model):
    first_origin = models.CharField(max_length=3)
    first_destination = models.CharField(max_length=3)
    first_departure_time = models.CharField(max_length=50)
    first_arrival_time = models.CharField(max_length=50)

    second_origin = models.CharField(max_length=3)
    second_destination = models.CharField(max_length=3)
    second_departure_time = models.CharField(max_length=50)
    second_arrival_time = models.CharField(max_length=50)

    total_price = models.IntegerField(default=0)
