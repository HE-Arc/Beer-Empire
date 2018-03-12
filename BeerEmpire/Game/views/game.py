from django.shortcuts import render, redirect
# from django.http import HttpResponse
from django.views import generic, View
#from django.urls import reverse_lazy

# from.models import Beer, Profile

class FarmView(generic.TemplateView):
    template_name= "base/farm.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['informations du joueur'] = "Kek"
        return context
