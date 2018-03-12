from django.shortcuts import render

def farm(request):
    context = {}
    return render(request, 'game/farm.html', context)


def factory(request):
    context = {}
    return render(request, 'game/factory.html', context)


def market(request):
    context = {}
    return render(request, 'game/market.html', context)
