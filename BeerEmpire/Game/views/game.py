from django.shortcuts import render, redirect
# from django.http import HttpResponse
from django.views import generic, View
#from django.urls import reverse_lazy

<<<<<<< HEAD
# from.models import Beer, Profile

class FarmView(generic.TemplateView):
    template_name= "base/farm.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['informations du joueur'] = "Kek"
        return context
=======
def farm(request):
    context = {}
    return render(request, 'game/farm.html', context)


def factory(request):
    context = {}
    return render(request, 'game/factory.html', context)


def market(request):
    context = {}
    return render(request, 'game/market.html', context)
>>>>>>> 93024e0eef9a6baa5156698ece8b3c9143c799c2
