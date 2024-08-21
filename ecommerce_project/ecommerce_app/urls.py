# auth/urls.py
from django.urls import path
from .views import *

urlpatterns = [
    path('jewelListing/', ListJewel.as_view(), name='jewelListing')
]