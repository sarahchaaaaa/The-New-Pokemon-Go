// main.js 


// CONSTANTS 
PORT_NUM = 51053;
BASE_URL = "http://student04.cse.nd.edu:" + PORT_NUM; 
IMG_URL = "http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

// PROTOTYPES 
Label.prototype = new Item(); 
Button.prototype = new Item(); 
Div.prototype = new Item(); 
Image.prototype = new Item(); 
SearchBar.prototype = new Item(); 

// ELEMENTS TO DISPLAY ON PAGE
var title = new Label(); 
title.createLabel("WELCOME TO POKEAPI", "title");

var strongTypes = new Label(); 
strongTypes.createLabel("", "strongTypes");
strongTypes.addToDocument(); 

var strongLabel = new Label(); 
strongLabel.createLabel("Strengths: ", "strongLabel");


var weakTypes = new Label();
weakTypes.createLabel("", "weakTypes"); 

var weakLabel = new Label(); 
weakLabel.createLabel("Weaknesses: ", "weakLabel");

var type = new Label();
type.createLabel("", "TYPE"); 

var typeLabel = new Label(); 
typeLabel.createLabel("Type: ", "typeLabel");

var search = new Button(); 
search.createButton("search", "search");  
search.addToDocument(); 

var searchBar = new SearchBar(); 
searchBar.createSB("searchBar", ""); 

var sprite = new Image();
var startImg = IMG_URL + "0.png";
sprite.createImage("sprite", startImg); 

// DIVS 
var titleDiv = new Div();
titleDiv.createDiv("titleDiv", "titleDiv");
titleDiv.add(searchBar);
titleDiv.add(title);

var weakDiv = new Div(); 
weakDiv.createDiv("weakDiv", "weakDiv");
weakDiv.add(weakLabel); 
weakDiv.add(weakTypes)

var strongDiv = new Div(); 
strongDiv.createDiv("strongDiv", "strongDiv"); 
strongDiv.add(strongLabel); 
strongDiv.add(strongTypes)

var typeDiv = new Div();
typeDiv.createDiv("typeDiv", "typeDiv"); 
typeDiv.add(typeLabel); 
typeDiv.add(type); 

var headerContainer = new Div();
headerContainer.createDiv("headerContainer", "headerContainer");
headerContainer.add(titleDiv);
headerContainer.add(sprite);
headerContainer.addToDocument();

var searchContainer = new Div(); 
searchContainer.createDiv("searchContainer", "searchContainer"); 
searchContainer.add(searchBar);
searchContainer.add(search);
searchContainer.addToDocument(); 

var container = new Div(); 
container.createDiv("container", "container"); 
container.add(typeDiv);
container.add(weakDiv); 
container.add(strongDiv);
container.addToDocument();


// FUNCTIONS
function parseInfo(){
    let input = document.getElementById('searchBar').value;
    pokeName = input.toLowerCase();
    var data = {}; 
    
    var pokeType = JSON.parse(getPokeInfo(pokeName));   
    var pokeID = JSON.parse(getPokeID(pokeName));   
    for (i in pokeID['pokemon']){
        if (pokeID['pokemon'][i]['name'] == pokeName){
            var nextImgId = pokeID['pokemon'][i]['id'];
        }
    }

    data["type"] = pokeType["type"];
    var typeList = data["type"];

    
    if (typeof typeList == 'object'){
        var strong = JSON.parse(getStrong(data["type"][0])); 
        var weak = JSON.parse(getWeak(data["type"][0])); 
    }
    else if (typeof typeList == 'string'){
        var strong = JSON.parse(getStrong(data["type"])); 
        console.log('here');
        console.log(strong);
        var weak = JSON.parse(getWeak(data["type"])); 
    }
    else{
        var strong = 'Pokemon not found';
        var weak = 'Pokemon not found';
    }
    
    data["weak"] = weak["weakness"];
    data["strong"] = strong["strength"]; 
    data["id"] = nextImgId;
    
    return data; 
}

function getPokeInfo(name) {
    var req = new XMLHttpRequest(); 
    req.open("GET", BASE_URL + "/pokemon/" + name, false); 
    req.onerror = function(e) { console.error(req.statusText); }
    req.onload = function(e){ console.log(req.responseText); }
    req.send(null); 
    return req.responseText; 
}

function getPokeID(name) {
    var req = new XMLHttpRequest(); 
    req.open("GET", BASE_URL + "/pokemon", false); 
    req.onerror = function(e) { console.error(req.statusText); }
    req.onload = function(e){ console.log(req.responseText); }
    req.send(null); 
    return req.responseText; 
}

function getStrong(type) {
    var sreq = new XMLHttpRequest(); 
    sreq.open("GET", BASE_URL + "/strength/" + type, false); 
    sreq.onerror = function(e) { console.error(sreq.statusText); }
    sreq.onload = function(e){ console.log(sreq.responseText); }
    sreq.send(null); 
    return sreq.responseText; 
}

function getWeak(type) {
    var wreq = new XMLHttpRequest(); 
    wreq.open("GET", BASE_URL + "/weakness/" + type, false); 
    wreq.onerror = function(e) { console.error(wreq.statusText); }
    wreq.onload = function(e){ console.log(wreq.responseText); }
    wreq.send(null); 
    return wreq.responseText; 
}

function getNextImg(newImage) {
    var nextImg = document.getElementById("sprite"); 
    nextImg.setAttribute("src", newImage); 
}

document.getElementById("search").onmouseup = function() {
    data = parseInfo(); 
    var ptype = data["type"]; 
    var strong = data["strong"]; 
    var weak = data["weak"]; 
    var nextID = data["id"];
    var newLink = IMG_URL + nextID + '.png';
    getNextImg(newLink); 

    strongTypes.setText(strong); 
    weakTypes.setText(weak); 
    type.setText(ptype); 
} 
