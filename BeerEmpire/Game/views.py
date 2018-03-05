from django.shortcuts import render

def index(request):
    context = {}
    return render(request, 'index.html', context)


def farm(request):
    context = {"Bonjour et bienvenu dans la ferme !"}
    return render(request, 'index.html', context)
