from django.contrib import admin

from .models import Beer, Profile

admin.site.register([Beer, Profile, ProfileBeer])

# Register your models here.
