from rest_framework import generics

from .models import Flight
from .serializers import FlightSerializer

# Create your views here.


class ListFlight(generics.ListCreateAPIView):
    queryset = Flight.objects.all()
    serializer_class = FlightSerializer


class DetailFlight(generics.RetrieveUpdateDestroyAPIView):
    queryset = Flight.objects.all()
    serializer_class = FlightSerializer
