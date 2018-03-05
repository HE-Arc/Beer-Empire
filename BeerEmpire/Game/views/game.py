from django.shortcuts import render

def farm(request):
    context = {}
    return render(request, 'base/farm.html', context)
