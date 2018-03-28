from django.shortcuts import render, redirect
# from django.http import HttpResponse
from django.views import generic, View
#from django.urls import reverse_lazy

from Game.models import Profile

class FarmView(generic.TemplateView):
    template_name= "game/farm.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['factoryName'] = Profile.objects.get(user = self.request.user)
        return context


class FactoryView(generic.TemplateView):
    template_name= "game/factory.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context


class MarketView(generic.TemplateView):
    template_name= "game/market.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context
