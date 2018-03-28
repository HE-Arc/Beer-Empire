// See baseAuth for the origine of those variables.
var nbMalt = malt;
var nbYeast = yeast;
var nbHops = hops;

function clickOnMalt(){nbMalt++; updateValues();}
function clickOnYeast(){nbYeast++; updateValues();}
function clickOnHops(){nbHops++; updateValues();}




function updateValues()
{
    document.getElementById("nbMalt").innerHTML  = nbMalt + "<small>kg</small>";
    document.getElementById("nbYeast").innerHTML  = nbYeast  + "<small>kg</small>";
    document.getElementById("nbHops").innerHTML  = nbHops  + "<small>kg</small>";
}
