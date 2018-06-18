
function handleClickEvent(e) {
    var weight = document.getElementById('user-weight').value;
    var planetName = document.getElementById('planets').value;
    var result = calculateWeight(weight, planetName);
    document.getElementById('output').innerHTML = result;
}

document.getElementById("calculate-button").onclick = handleClickEvent;
//^this line of code activates the button!!^

// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];


var select = document.getElementById("planets");
var planet = ['Pluto', 'Neptune', 'Uranus', 
'Saturn', 'Jupiter', 'Mars', 'Moon', 
'Earth', 'Venus', 'Mercury', 'Sun']

for (var i = 0; i < planet.length; i++) {
    var plnt = planet[i];
    var el = document.createElement('option')
    el.textContent = plnt;
    select.appendChild(el);
}

function calculateWeight(weight, planetName) {
    for(let i = 0; i < planets.length; i++) {
        var planetAry = planets[i];
        if(planetAry[0] === planetName) {
            var newWeight = weight * planetAry[1]; 
            var string = "If you were on " + planetName + ", you would weigh " + newWeight + "lbs!";
            return string;
        }
    }
}







