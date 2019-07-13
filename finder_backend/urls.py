from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListFlight.as_view()),
    path('<int:pk>/', views.DetailFlight.as_view()),
]
