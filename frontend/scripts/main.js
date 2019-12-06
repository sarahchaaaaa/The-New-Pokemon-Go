// main.js 


// CONSTANTS 
PORT_NUM = 51053;
BASE_URL = "http://student04.cse.nd.edu:" + PORT_NUM; 

// PROTOTYPES 
Label.prototype = new Item(); 
Button.prototype = new Item(); 
Div.prototype = new Item(); 
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
    data["type"] = pokeType["type"];
    var typeList = data["type"];

    console.log(typeof typeList)
    console.log(typeList.length);

    if (typeof typeList == 'object'){
        var strong = JSON.parse(getStrong(data["type"][0])); 
        var weak = JSON.parse(getWeak(data["type"][0])); 
    }
    else{
        var strong = JSON.parse(getStrong(data["type"])); 
        var weak = JSON.parse(getWeak(data["type"])); 
    }

    data["weak"] = weak["weakness"];
    data["strong"] = strong["strength"]; 

    console.log(data)
    
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

document.getElementById("search").onmouseup = function() {
    data = parseInfo(); 
    var ptype = data["type"]; 
    console.log(ptype)
    var strong = data["strong"]; 
    var weak = data["weak"]; 

    strongTypes.setText(strong); 
    weakTypes.setText(weak); 
    type.setText(ptype); 
} 