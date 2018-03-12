



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

var userInput = document.getElementById("input").value;

var inputString = userInput.toLowerCase().split(" ");

var outputString = document.getElementById("final-translation");

//PRINT TO DOM FINAL ANSWER

// outputString.innerHTML = "<h3>" + "Your Translated Phrase: " + "</h3>");

// TRANSLATE TEST


// var testArray = ["merry", "christmas", "and", "happy", "new", "year"]



// for (var property1 in spanish) {
//     for (var i=0; i<testArray; i++) {
//         if (spanish[property1] === testArray[i]) {
//             console.log(spanish.merry + " " + spanish.christmas + " " + spanish.and + " " + spanish.happy + " " + spanish.new + " " + spanish.year + " " + "."); 
//             } else { console.log("nope");
//             }
//         }
//     };


// BUTTON CLICK

var spanishButton = document.getElementById("spanish-button");

spanishButton.addEventListener("click", buttonClick);

function buttonClick() {
    console.log(userInput);
}







