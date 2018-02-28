from django.db import models


class Profile(models.Model):
    factory_name = models.CharField(max_length=32)

    ressources_malt = models.IntegerField()
    ressources_hops = models.IntegerField()
    ressources_yeast = models.IntegerField()
    ressources_money = models.IntegerField()

    farm_malt = models.IntegerField()
    farm_hops = models.IntegerField()
    farm_yeast = models.IntegerField()

    beers = models.ManyToManyField(Beer, through='ProfileBeer')

    def __str__(self):
        return self.factory_name


class Beer(models.Model):
    name = models.CharField(max_length=32)
    desc = models.TextField()
    cost = models.IntegerField()
    
    need_malt = models.IntegerField()
    need_hops = models.IntegerField()
    need_yeast = models.IntegerField()

    def __str__(self):
        return self.name


class ProfileBeer(models.Model):
    profile = models.ForeignKey(Profile)
    beer = models.ForeignKey(Beer)
    nb_beer = models.IntegerField()
