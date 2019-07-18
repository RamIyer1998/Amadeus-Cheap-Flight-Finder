from datetime import datetime
from rest_framework import generics
from amadeus import Client

from .models import Flight
from .serializers import FlightSerializer
from .api_keys import api_key, api_secret

# Create your views here.


class FindFlight(generics.ListCreateAPIView):
    serializer_class = FlightSerializer

    def get_queryset(self):
        origin = self.request.query_params.get('origin')
        destination = self.request.query_params.get('destination')
        departure_date = self.request.query_params.get('departure_date')
        return_date = self.request.query_params.get('return_date')

        dept_date = datetime.strptime(str(departure_date), "%Y-%m-%d")
        ret_date = datetime.strptime(str(return_date), "%Y-%m-%d")

        objectset = Flight.objects.all()
        queryset = objectset.filter(origin=origin, destination=destination,
                                    departure_date=departure_date, return_date=return_date)
        if len(queryset) == 0:
            amadeus = Client(client_id=api_key,
                             client_secret=api_secret)
            offers = amadeus.shopping.flight_offers.get(origin=origin,
                                                        destination=destination, departureDate=dept_date.date(), returnDate=ret_date.date()).data
            for offer in offers:
                price_dict = (offer['offerItems'][0]['price'])
                total_price = float(
                    price_dict['total'])+float(price_dict['totalTaxes'])
                Flight.objects.create(
                    origin=origin, destination=destination, departure_date=departure_date, return_date=return_date, price=total_price)
            queryset = objectset.filter(origin=origin, destination=destination,
                                        departure_date=departure_date, return_date=return_date)
        return queryset


class ListFlight(generics.ListCreateAPIView):
    queryset = Flight.objects.all()
    serializer_class = FlightSerializer


class DetailFlight(generics.RetrieveUpdateDestroyAPIView):
    queryset = Flight.objects.all()
    serializer_class = FlightSerializer
