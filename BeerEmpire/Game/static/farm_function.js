var nbMalt;
var nbYeast;
var nbHops;
var nbMaltSlaves;
var nbYeastSlaves;
var nbHopsSlaves;
var nbIdleSlaves;

var Profile = {
  "ressources_malt":0,
  "ressources_hops":0,
  "ressources_money":0,
  "ressources_yeast":0,

  "employee_hops":0,
  "employee_malt":0,
  "employee_idle":0,
  "employee_yeast":0,
}

function objToParametters(obj){
  parammeters = "";
  for(var key in obj){
    val = obj[key];
    parammeters += key+"="+val+"&";
  }
  return parammeters;
}

function gameLoop(){
  // Save with API
  fetch('/api/profile', {
    method: 'POST',
    credentials: "include",
    body: objToParametters(Profile),
    headers:{
      "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
    }
  })
}

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
  fetch('/api/profile', {
     credentials: "include"
  }).then(function(response){
    return response.json();
  }).then(function(obj){
    Profile = obj[0]['fields'];
  })
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
    nbIdleSlaves = dataDiv.getAttribute("data-idleslaves");
  }
}
