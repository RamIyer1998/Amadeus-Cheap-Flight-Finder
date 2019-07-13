from rest_framework import serializers
from .models import Flight


class FlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flight
        fields = (
            'id',
            'origin',
            'destination',
            'departure_date',
            'return_date'
        )
