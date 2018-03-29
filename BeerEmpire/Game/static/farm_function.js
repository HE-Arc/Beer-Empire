var nbMalt;
var nbYeast;
var nbHops;
var nbMaltSlaves;
var nbYeastSlaves;
var nbHopsSlaves;

/*
1. add event listener -> on click = function(){} To make is cleaner,
   less code in the html file, we handle everythin in the .js
2. We need a DRYer in here!!!
*/

function clickOnMalt(){nbMalt++; updateValues();}
function clickOnYeast(){nbYeast++; updateValues();}
function clickOnHops(){nbHops++; updateValues();}

function ClickOnAddMaltSlave(){nbMaltSlaves++; updateValues(); }
function ClickOnAddYeastSlave(){nbYeastSlaves++;  updateValues();}
function ClickOnAddHopsSlave(){nbHopsSlaves++; updateValues();}

function ClickOnSubMaltSlave(){
  if(nbMaltSlaves > 0)
    nbMaltSlaves--;
  updateValues();
}
function ClickOnSubYeastSlave(){
  if(nbYeastSlaves > 0)
    nbYeastSlaves--;
  updateValues();
}
function ClickOnSubHopsSlave(){
  if(nbHopsSlaves > 0)
    nbHopsSlaves--;
  updateValues();
}

function updateValues()
{
    document.getElementById("nbMalt").innerHTML  = nbMalt + "<small>kg</small>";
    document.getElementById("nbYeast").innerHTML  = nbYeast  + "<small>kg</small>";
    document.getElementById("nbHops").innerHTML  = nbHops  + "<small>kg</small>";

    document.getElementById("farmerMalt").innerHTML = nbMaltSlaves + " farmer";
    document.getElementById("farmerYeast").innerHTML = nbYeastSlaves + " farmer";
    document.getElementById("farmerHops").innerHTML = nbHopsSlaves + " farmer";
}

window.onload = function(){
  // See base.html for the origine of those variables.
  nbMalt = document.getElementById("nbMalt").getAttribute("data-malt");
  nbYeast = document.getElementById("nbYeast").getAttribute("data-yeast");
  nbHops = document.getElementById("nbHops").getAttribute("data-hops");
  nbMaltSlaves = document.getElementById("data").getAttribute("data-maltslaves");
  nbYeastSlaves = document.getElementById("data").getAttribute("data-yeastslaves");
  nbHopsSlaves = document.getElementById("data").getAttribute("data-hopsslaves");
  idleSlaves = document.getElementById("data").getAttribute("data-idleslaves");
}
