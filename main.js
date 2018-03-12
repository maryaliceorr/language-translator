console.log("hello");



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

var newString = "";

// for (var inputString in spanish) {
    

}

// console.log(spanish, german, esperanto, inputString);





// function buttonClick 


// function matchLanguage (english, spanish) {
//     for (var i=0; i<english; i++) {
//         for (var i=0; i<spanish; i++) {
//             if (english[i] === spanish[i]) {
//             console.log(spanish);
//         }
//             else {console.log(nope)};
//             }
//         }
// };


matchLanguage.call();

// var spanishButton = document.getElementById("spanish-button");

// spanishButton.addEventListener("click", buttonClick);

// function buttonClick() {
//     alert ("Hello World!");
// }


// function 

// function match ()


var string1 = "";
var object1 = {a: 1, b: 2, c: 3};

for (var property1 in object1) {
  string1 = string1 + object1[property1];
}

console.log(string1);
// expected output: "123"



