# Beer-Empire
Django project, a game where you conquer the world beer by beer.

## Introduction
This project is about the creation of an idle game in wich earn money to improve your empire and to earn even MORE money!

First of all, the player starts with a simple farm, he will need to harvest ressources like wheat, corn, hop and yeast. Those ressources can be sold. With the money aquired the player will be able to buy upgrades for his farm. With enough money, he will be able to buy the brewery where the real game starts.

The brewery will enable the player to brew different type of beers using the farm production to get a high profit. Missions will be given to the player for him to ensure the survival or enrichment of his brewery: Oktoberfest, political assassination (using badly brewed beers).


## Conception
The game will be separated in two different part (third in bonus) :
- The Farm Part
- The Factory Part
- The Market Part


### The Farm Part
When you launch the game for the first time, it will open the farm page :

![Alt Text](https://github.com/HE-Arc/Beer-Empire/blob/master/Image/ConceptionFarm.PNG)

1) Represents the fields owned by the player, by clicking on them he will harvest ressources.
2) Display the player amount of ressources, money not included.
3) Sell the ressources for money.
4) Buttons who increase the amount of ressource harvested in the fields.



### The Factory
![Alt_Text](https://github.com/HE-Arc/Beer-Empire/blob/master/Image/ConceptionFactory.PNG)

1) The BeerEngines defines how much beer you can actually make. Each engine upgrade a certain type of beer.
2) Display the player amount of each ressource (Not money).
3) Number of each beers the player possesses.
4) Buttons to launch different missions.

### The Market
![Alt_Text](https://github.com/HE-Arc/Beer-Empire/blob/master/Image/ConceptionMarket.PNG)
1) This list display the other player ressources you can bought.
2) This list display the ressources you can sell to other player.

### The Laboratory
![Alt_Text](https://github.com/HE-Arc/Beer-Empire/blob/master/Image/ConceptionLaboratory.PNG)
1) The technologic tree is a list of different upgrade, but also the employees who will automaticly harvest/make ressources/beers every second.
