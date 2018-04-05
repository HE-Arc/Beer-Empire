from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views import generic, View
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin

from Game.models import Profile

class GameViewBase(LoginRequiredMixin, generic.TemplateView):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'

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

class ApiProfile(LoginRequiredMixin, View):
    def post(self, request):
        try:
            data = request.POST
            profile = self.request.user.profile
            profile.ressources_malt = data.get("ressources_malt")
            profile.ressources_hops = data.get("ressources_hops")
            profile.ressources_yeast = data.get("ressources_yeast")
            profile.ressources_money = data.get("ressources_money")

            profile.employee_malt = data.get("employee_malt")
            profile.employee_hops = data.get("employee_hops")
            profile.employee_yeast = data.get("employee_yeast")
            profile.employee_idle = data.get("employee_idle")

            profile.save()
            return HttpResponse(status=200)
        except Exception:
            return HttpResponse(status=500)
