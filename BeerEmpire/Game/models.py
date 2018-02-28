from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver



class Beer(models.Model):
    name = models.CharField(max_length=32)
    desc = models.TextField()
    cost = models.IntegerField()
    
    need_malt = models.IntegerField()
    need_hops = models.IntegerField()
    need_yeast = models.IntegerField()

    def __str__(self):
        return self.name

class Profile(models.Model):
    factory_name = models.CharField(max_length=32)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    ressources_malt = models.IntegerField(default=0)
    ressources_hops = models.IntegerField(default=0)
    ressources_yeast = models.IntegerField(default=0)
    ressources_money = models.IntegerField(default=0)

    farm_malt = models.IntegerField(default=0)
    farm_hops = models.IntegerField(default=0)
    farm_yeast = models.IntegerField(default=0)

    beers = models.ManyToManyField(Beer, through='ProfileBeer')

    def __str__(self):
        return self.factory_name

class ProfileBeer(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    beer = models.ForeignKey(Beer, on_delete=models.CASCADE)
    nb_beer = models.IntegerField()


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()