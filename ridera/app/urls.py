from django import views
from django.urls import path
from .views import index, about, contact,termandcondition

urlpatterns = [
    path('', index, name='index'),
    path('about', about, name='about'),
    path('conatact', contact, name='contact'),
        path('termsandcondition', termandcondition, name='termandcondition'),


]
