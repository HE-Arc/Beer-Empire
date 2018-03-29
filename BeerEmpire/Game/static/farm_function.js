var nbMalt;
var nbYeast;
var nbHops;
var nbMaltSlaves;
var nbYeastSlaves;
var nbHopsSlaves;
var nbIdleSlaves;

/*
MEMENTO:
1. add event listener -> on click = function(){} To make is cleaner,
   less code in the html file, we handle everythin in the .js.
2. Separate nb of farmers in a new .js file.
3. We need a DRYer in here!
*/

function clickOnMalt(){
  nbMalt++;
  updateValues();
}
function clickOnYeast(){
  nbYeast++;
  updateValues();
}
function clickOnHops(){
  nbHops++;
  updateValues();
}

function ClickOnAddMaltSlave(){
  if(nbIdleSlaves>0){
    nbMaltSlaves++;
    nbIdleSlaves--;
  }
  updateValues();
}
function ClickOnAddYeastSlave(){
  if(nbIdleSlaves>0){
    nbYeastSlaves++;
    nbIdleSlaves--;
  }
  updateValues();
}
function ClickOnAddHopsSlave(){
  if(nbIdleSlaves>0){
    nbHopsSlaves++;
    nbIdleSlaves--;
  }
  updateValues();
}

function ClickOnSubMaltSlave(){
  if(nbMaltSlaves > 0){
    nbMaltSlaves--;
    nbIdleSlaves++;
  }
  updateValues();
}
function ClickOnSubYeastSlave(){
  if(nbYeastSlaves > 0){
    nbYeastSlaves--;
    nbIdleSlaves++;
  }
  updateValues();
}
function ClickOnSubHopsSlave(){
  if(nbHopsSlaves > 0){
    nbHopsSlaves--;
    nbIdleSlaves++;
  }
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

  // Put this in a new .js File only loaded in farm.html.
  dataDiv = document.getElementById("data");
  if(dataDiv != null){
    nbMaltSlaves = dataDiv.getAttribute("data-maltslaves");
    nbYeastSlaves = dataDiv.getAttribute("data-yeastslaves");
    nbHopsSlaves = dataDiv.getAttribute("data-hopsslaves");
    // has 100 for testing purposes. Should only come from db.
    nbIdleSlaves = dataDiv.getAttribute("data-idleslaves") + 100;
  }
}
