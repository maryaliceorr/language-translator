



// Objects - Languages

var spanish = {
    "merry":"Feliz", 
    "christmas":"Navidad", 
    "and":"y", 
    "happy":"Próspero", 
    "new":"Neuvo", 
    "year":"Año"
};

var german = {
    "merry":"Fröhlich", 
    "christmas":"Weihnachten", 
    "and":"und", 
    "happy":"Glücklich", 
    "new":"Neu", 
    "year":"Jahr"
};

var esperanto = {
    "merry":"Feliĉan", 
    "christmas":"Kristnaskon", 
    "and":"und", 
    "happy":"Glücklich", 
    "new":"Neu", 
    "year":"Jahr"
};

//---------variables-----------------//
var userInput = document.getElementById("input");
var spanishButton = document.getElementById("spanish-button");
var germanButton = document.getElementById("german-button");
var esperantoButton = document.getElementById("esperanto-button");
var outputString = document.getElementById("final-translation");
var allButtons = document.getElementsByClassName("buttons");

//--------event listeners-----------//



spanishButton.addEventListener ("click", (e) => {
    const inputString = userInput.value.toLowerCase().split(" ");
    console.log(typeof inputString);
        let output = "";
    for (var j=0; j<inputString.length; j++) {
        output += spanish[inputString[j]].concat(" ")
    }
    outputString.innerHTML = output;
})

germanButton.addEventListener ("click", (e) => {
    const inputString = userInput.value.toLowerCase().split(" ");
        let output ="";
    for (var k=0; k<inputString.length; k++) {
        output += german[inputString[k]].concat(" ")
    }
    outputString.innerHTML = output;
})

esperantoButton.addEventListener ("click", (e) => {
    const inputString = userInput.value.toLowerCase().split(" ");
        let output= "";
    for (var l=0; l<inputString.length; l++) {
        output += esperanto[inputString[l]].concat(" ")
    }
    outputString.innerHTML = output;
})




//-------------print translation-------//
var allButtons = document.getElementsByClassName("buttons");

for (var i=0; i<allButtons.length; i++) {
        allButtons[i].addEventListener("click", (e) => {
        if (e.target.id === "spanish-button") {
            outputString = spanishButton[userInput];
        } else if (e.target.id === "german-button") {
            outputString = germanButton[userInput];
        } else {
            outputString = "esperanto-button"
        }
    })
};
