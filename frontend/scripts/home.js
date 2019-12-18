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

var description2 = new Label(); 
description2.createLabel(" ", "description2");  
description2.addToDocument(); 

var description = new Label(); 
description.createLabel("The functionality of this API is to help a beginner at Pokemon with best and worst matchups. The user will be able to enter their Pokemon of choice, and our API will send requests to the PokeAPI from PokeAPI.co to return a Pokemon that is a good matchup and a Pokemon that is a poor matchup against the given Pokemon.", ""); 

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
titleDiv.add(description);
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

var infoContainer = new Div(); 
infoContainer.createDiv("infoContainer", "infoContainer"); 
infoContainer.add(description);
infoContainer.add(description2);
infoContainer.addToDocument(); 













