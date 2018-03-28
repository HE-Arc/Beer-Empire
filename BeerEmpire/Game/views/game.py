from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views import generic, View
from django.urls import reverse_lazy

from Game.models import Profile

from Game.models import Profile

class GameViewBase(generic.TemplateView):

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['profile'] = Profile.objects.get(user=self.request.user)
        return context


class FarmView(GameViewBase):
    template_name= "game/farm.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context


class FactoryView(GameViewBase):
    template_name= "game/factory.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context


class MarketView(GameViewBase):
    template_name= "game/market.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context
