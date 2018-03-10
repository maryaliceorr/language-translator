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

var userType = document.getElementById("input").value;

var english = userType.split(" ");

console.log(spanish, german, esperanto, english);