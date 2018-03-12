from django.urls import path, include
from django.contrib.auth import views as auth_view
from . import views


urlpatterns = [
     path('', views.index, name='index'),
     path('', include('django.contrib.auth.urls')),
     # path('farm', views.farm, name='farm'),
     path('farm', views.FarmView.as_view(), name='farm'),
]
