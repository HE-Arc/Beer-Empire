from django.shortcuts import render, redirect
# from django.http import HttpResponse
from django.views import generic, View
#from django.urls import reverse_lazy

class FarmView(generic.TemplateView):
    template_name= "game/farm.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['informations du joueur'] = "Kek"
        return context

def factory(request):
    context = {}
    return render(request, 'game/factory.html', context)


def market(request):
    context = {}
    return render(request, 'game/market.html', context)
