from django.urls import path, include
from django.contrib.auth import views as auth_view
from . import views
from django.views.generic.base import RedirectView

urlpatterns = [
     path('', include('django.contrib.auth.urls')),

     path('', RedirectView.as_view(url='/login', permanent=False), name='index'),
     path('register', views.UserFormView.as_view(), name='Register'),
     path('farm', views.FarmView.as_view(), name='Farm'),
     path('factory', views.FactoryView.as_view(), name='Factory'),
     path('market', views.MarketView.as_view(), name='Market')
]
