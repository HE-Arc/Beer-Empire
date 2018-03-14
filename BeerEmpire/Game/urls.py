from django.urls import path, include
from django.contrib.auth import views as auth_view
from . import views
from django.views.generic.base import RedirectView

urlpatterns = [
     path('', include('django.contrib.auth.urls')),

     path('', RedirectView.as_view(url='/login', permanent=False), name='index'),
     path('farm', views.FarmView.as_view(), name='Farm'),
     path('factory', views.game.factory, name='Factory'),
     path('market', views.game.market, name='Market')
]
