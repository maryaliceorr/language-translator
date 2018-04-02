



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
var spanishButton = document.getElementById("spanish-button").split(" ");
var germanButton = document.getElementById("german-button");
var esperantoButton = document.getElementById("esperanto-button");
var outputString = document.getElementById("final-translation");
var allButtons = document.getElementsByClassName("buttons");

//--------event listeners-----------//



spanishButton.addEventListener ("click", (e) => {
    const inputString = userInput.value.toLowerCase();
    let output = spanish[inputString];
    outputString.innerHTML = output;
})

germanButton.addEventListener ("click", (e) => {
    const inputString = userInput.value.toLowerCase();
    let output = german[inputString];
    outputString.innerHTML = output;
})

esperantoButton.addEventListener ("click", (e) => {
    const inputString = userInput.value.toLowerCase();
    let output = esperanto[inputString];
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
