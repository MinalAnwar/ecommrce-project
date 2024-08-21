from django.shortcuts import render
from rest_framework import generics
from .serializers import ProductListingSerializer
from .models import *
# Create your views here.

class ListJewel(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductListingSerializer
    