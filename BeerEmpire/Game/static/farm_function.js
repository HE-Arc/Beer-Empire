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

function clickOnFarm(key){
  Profile[key]++;
  updateValues();
}

function AddSlaveToFarm(key){
  if(Profile["employee_idle"]>0){
    Profile[key]++;
    Profile["employee_idle"]--;
  }
  updateValues();
}
function RemoveSlaveFromFarm(key){
  if(Profile[key]>0){
    Profile["employee_idle"]++;
    Profile[key]--;
  }
  updateValues();
}

function MakeAndSoldBeer(price, ressouces)
{
    if(Profile["ressources_malt"] >= ressouces[0] && Profile["ressources_yeast"] >= ressouces[1] && Profile["ressources_hops"] >= ressouces[2])
    {
        Profile["ressources_money"] += price;
        Profile["ressources_malt"] -= ressouces[0];
        Profile["ressources_yeast"] -= ressouces[1];
        Profile["ressources_hops"] -= ressouces[2];
    }
    updateValues();
}

function updateValues()
{
    document.getElementById("nbMalt").innerHTML  = Profile["ressources_malt"] + "<small>kg</small>";
    document.getElementById("nbYeast").innerHTML  = Profile["ressources_yeast"]  + "<small>kg</small>";
    document.getElementById("nbHops").innerHTML  = Profile["ressources_hops"]  + "<small>kg</small>";

    document.getElementById("farmerMalt").innerHTML = Profile["employee_malt"] + " farmer";
    document.getElementById("farmerYeast").innerHTML = Profile["employee_yeast"] + " farmer";
    document.getElementById("farmerHops").innerHTML = Profile["employee_hops"] + " farmer";

    document.getElementById("nbMoney").innerHTML = Profile["ressources_money"] + "$";

    gameLoop();
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
    nbMoney = dataDiv.getAttribute("data-nbMoney");
  }
}
