from django import template

register = template.Library()

@register.filter(name='beerColor')
def beerColor(value):
    l = 50-value
    return l if l >= 0 else 0
