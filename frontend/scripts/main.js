// main.js 


// CONSTANTS 
PORT_NUM = 51053;
BASE_URL = "http://student04.cse.nd.edu:" + PORT_NUM; 
IMG_URL = "http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
TYPE_URL = "http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/"; 

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
var startImg = "https://img.icons8.com/plasticine/100/000000/pokeball.png";
sprite.createImage("sprite", startImg); 

var strongSprite = new Image();
var strongStartImg = IMG_URL + "0.png";
strongSprite.createImage("strongSprite", strongStartImg); 

var weakSprite = new Image();
var weakStartImg = IMG_URL + "0.png";
weakSprite.createImage("weakSprite", weakStartImg); 

var weakAgainstLabel = new Label();
weakAgainstLabel.createLabel("", "weakAgainstLabel");

var weakAgainstType = new Label();
weakAgainstType.createLabel("", "weakAgainstType");

var strongAgainstLabel = new Label();
strongAgainstLabel.createLabel("", "strongAgainstLabel");

var strongAgainstType = new Label();
strongAgainstType.createLabel("", "strongAgainstType");


// DIVS 
var titleDiv = new Div();
titleDiv.createDiv("titleDiv", "titleDiv");
titleDiv.add(searchBar);
titleDiv.add(title);

var weakAgainst = new Div();
weakAgainst.createDiv("weakAgainst", "weakAgainst");
weakAgainst.add(weakAgainstLabel);
weakAgainst.add(weakAgainstType);

var strongAgainst = new Div();
strongAgainst.createDiv("strongAgainst", "strongAgainst");
strongAgainst.add(strongAgainstLabel);
strongAgainst.add(strongAgainstType);

var weakDiv = new Div(); 
weakDiv.createDiv("weakDiv", "weakDiv");
weakDiv.add(weakLabel); 
weakDiv.add(weakTypes);
weakDiv.add(weakAgainst);
weakDiv.add(weakSprite);

var strongDiv = new Div(); 
strongDiv.createDiv("strongDiv", "strongDiv"); 
strongDiv.add(strongLabel); 
strongDiv.add(strongTypes);
strongDiv.add(strongAgainst);
strongDiv.add(strongSprite);

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
    console.log(pokeID)
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
    // req.onload = function(e){ console.log(req.responseText); }
    req.send(null); 
    return req.responseText; 
}

function getPokeID(name) {
    var req = new XMLHttpRequest(); 
    req.open("GET", BASE_URL + "/pokemon", false); 
    req.onerror = function(e) { console.error(req.statusText); }
    // req.onload = function(e){ console.log(req.responseText); }
    req.send(null); 
    return req.responseText; 
}

function getStrong(type) {
    var sreq = new XMLHttpRequest(); 
    sreq.open("GET", BASE_URL + "/strength/" + type, false); 
    sreq.onerror = function(e) { console.error(sreq.statusText); }
    // sreq.onload = function(e){ console.log(sreq.responseText); }
    sreq.send(null); 
    return sreq.responseText; 
}

function getWeak(type) {
    var wreq = new XMLHttpRequest(); 
    wreq.open("GET", BASE_URL + "/weakness/" + type, false); 
    wreq.onerror = function(e) { console.error(wreq.statusText); }
    // wreq.onload = function(e){ console.log(wreq.responseText); }
    wreq.send(null); 
    return wreq.responseText; 
}

function getPokemonwithType(type) {
    var preq = new XMLHttpRequest(); 
    preq.open("GET", BASE_URL + "/types/" + type, false); 
    preq.onerror = function(e) { console.error(wreq.statusText); }
    // preq.onload = function(e){ console.log(wreq.responseText); }
    preq.send(null); 
    return preq.responseText; 
}

function getNextImg(id, newImage) {
    var nextImg = document.getElementById(id); 
    nextImg.setAttribute("src", newImage); 
}

function parseTypeInfo(data){
    var randData = {}; 

    console.log(data["strong"]);
    console.log(data["strong"].length);
    randStrong = Math.floor(Math.random() * data["strong"].length); 
    randWeak = Math.floor(Math.random() * data["weak"].length); 

    var pokewithStrong = JSON.parse(getPokemonwithType(data["strong"][randStrong])); 
    var pokewithWeak = JSON.parse(getPokemonwithType(data["weak"][randWeak])); 

    randData["strong type"] = pokewithStrong['type'];
    randData["strong pokemon"] = pokewithStrong['pokemon with typing'];
    randData["weak type"] = pokewithWeak['type'];
    randData["weak pokemon"] = pokewithWeak['pokemon with typing'];

    return randData
}

function parsePokemonInfo(randData){
    var pokeData = {}; 
    console.log(randData['strong pokemon'])
    console.log(randData['weak pokemon'])

    randStrongPoke = Math.floor(Math.random() * randData["strong pokemon"].length); 
    randWeakPoke = Math.floor(Math.random() * randData["weak pokemon"].length); 

    var randPokewithStrong = JSON.parse(getPokeInfo(randData["strong pokemon"][randStrongPoke])); 
    var randPokewithWeak = JSON.parse(getPokeInfo(randData["weak pokemon"][randWeakPoke])); 

    var strongMatchUp = randPokewithStrong['pokemon'];
    var weakMatchUp = randPokewithWeak['pokemon'];

    var pokeID = JSON.parse(getPokeID(pokeName));   
    for (i in pokeID['pokemon']){
        if (pokeID['pokemon'][i]['name'] == strongMatchUp){
            var strongImgId = pokeID['pokemon'][i]['id'];
        }
        else if (pokeID['pokemon'][i]['name'] == weakMatchUp){
            var weakImgId = pokeID['pokemon'][i]['id'];
        }
    }
    pokeData['weakPokemon'] = weakMatchUp;
    pokeData['strongPokemon'] = strongMatchUp;
    pokeData['weakImg'] = weakImgId;
    pokeData['strongImg'] = strongImgId;

    return pokeData;
}


document.getElementById("search").onmouseup = function() {
    data = parseInfo(); 
    var ptype = data["type"]; 
    var strong = data["strong"]; 
    var weak = data["weak"]; 
    var nextID = data["id"];
    var newLink = IMG_URL + nextID + '.png';
    getNextImg("sprite", newLink); 
    strongTypes.setText(strong); 
    weakTypes.setText(weak); 
    type.setText(ptype); 

    randData = parseTypeInfo(data);
    var weakagainst = randData['weak type'];
    weakAgainstLabel.setText('WEAK AGAINST: ');
    weakAgainstType.setText(weakagainst);

    var strongagainst = randData['strong type'];
    strongAgainstLabel.setText('STRONG AGAINST: ');
    strongAgainstType.setText(strongagainst);

    pokeData = parsePokemonInfo(randData);
    var nextWeakID = pokeData['weakImg'];
    var weakLink = IMG_URL + nextWeakID + '.png';
    getNextImg("weakSprite", weakLink);
    var nextStrongID = pokeData['strongImg'];
    var strongLink = IMG_URL + nextStrongID + '.png';
    getNextImg("strongSprite", strongLink);
    console.log(pokeData);

} 
