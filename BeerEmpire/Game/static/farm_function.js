var nbMalt = 0;
var nbYeast = 0;
var nbHops = 0;

function clickOnMalt(){nbMalt++; updateValues();}
function clickOnYeast(){nbYeast++; updateValues();}
function clickOnHops(){nbHops++; updateValues();}




function updateValues()
{
    document.getElementById("nbMalt").innerHTML  = nbMalt + "<small>kg</small>";
    document.getElementById("nbYeast").innerHTML  = nbYeast  + "<small>kg</small>";
    document.getElementById("nbHops").innerHTML  = nbHops  + "<small>kg</small>";

}


