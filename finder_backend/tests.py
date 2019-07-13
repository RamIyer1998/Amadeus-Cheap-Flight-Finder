from django.test import TestCase
from .models import Flight

# Create your tests here.


class FlightModelTest(TestCase):
    def setUp(self):
        Flight.objects.create(origin="PHL", destination="TYO",
                              departure_date="2020-05-20",
                              return_date="2020-05-29")

        Flight.objects.create(origin="PHL", destination="LAX",
                              departure_date="2020-06-20")

        Flight.objects.create(origin="JFK", destination="ATL",
                              departure_date="2019-08-10",
                              return_date="2019-08-23")

    def test_origin(self):
        flight_1 = Flight.objects.get(id=1)
        flight_2 = Flight.objects.get(id=2)
        flight_3 = Flight.objects.get(id=3)

        origin_1 = f'{flight_1.origin}'
        self.assertEquals(origin_1, 'PHL')

        origin_2 = f'{flight_2.origin}'
        self.assertEquals(origin_2, 'PHL')

        origin_3 = f'{flight_3.origin}'
        self.assertEquals(origin_3, 'JFK')

    def test_destination(self):
        flight_1 = Flight.objects.get(id=1)
        flight_2 = Flight.objects.get(id=2)
        flight_3 = Flight.objects.get(id=3)

        dest_1 = f'{flight_1.destination}'
        self.assertEquals(dest_1, 'TYO')

        dest_2 = f'{flight_2.destination}'
        self.assertEquals(dest_2, 'LAX')

        dest_3 = f'{flight_3.destination}'
        self.assertEquals(dest_3, 'ATL')

    def test_departure_date(self):
        flight_1 = Flight.objects.get(id=1)
        flight_2 = Flight.objects.get(id=2)
        flight_3 = Flight.objects.get(id=3)

        dep_1 = f'{flight_1.departure_date}'
        self.assertEquals(dep_1, '2020-05-20')

        dep_2 = f'{flight_2.departure_date}'
        self.assertEquals(dep_2, '2020-06-20')

        dep_3 = f'{flight_3.departure_date}'
        self.assertEquals(dep_3, '2019-08-10')

    def test_return_date(self):
        flight_1 = Flight.objects.get(id=1)
        flight_2 = Flight.objects.get(id=2)
        flight_3 = Flight.objects.get(id=3)

        ret_1 = f'{flight_1.return_date}'
        self.assertEquals(ret_1, '2020-05-29')

        ret_2 = f'{flight_2.return_date}'
        self.assertEquals(ret_2, '')

        ret_3 = f'{flight_3.return_date}'
        self.assertEquals(ret_3, '2019-08-23')
