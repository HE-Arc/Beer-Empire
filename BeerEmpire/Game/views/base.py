from django.shortcuts import render
from django.contrib.auth import logout

def index(request):
    context = {}
    return render(request, 'registration/login.html', context)


def register(request):
    context = {}
    return render(request, 'registration/register.html', context)