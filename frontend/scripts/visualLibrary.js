// visualLibrary.js 

function Item() {
    this.addToDocument = function() {
        document.body.appendChild(this.item); 
    }
}

function Button() {
    this.createButton = function(text, id) {
        this.item = document.createElement("button"); 
        this.item.setAttribute("id", id); 
        this.item.innerHTML = text; 
    }, 
    this.addClickEventHandler = function(handler, args) {
        this.item.onmouseup = function() {
            handler(args); 
        }
    }
}

function Image() {
    this.createImage = function(id, source){
        this.item = document.createElement("img"); 
        this.item.setAttribute("id", id);
        this.item.setAttribute("src", source); 
    }
}

function Label() {
    this.createLabel = function(text, id) {
        this.item = document.createElement("label"); 
        this.item.setAttribute("id", id); 
        this.item.appendChild(document.createTextNode(text)); 
    }, 
    this.setText = function(text) {
        this.item.innerHTML = text; 
    }
}

function SearchBar() {
    this.createSB = function(id, text) {
        this.item = document.createElement("input"); 
        this.item.setAttribute("id", id); 
        this.item.setAttribute("placeholder", "Enter a Pokemon to Search");
        this.item.setAttribute("value", text); 
        this.item.setAttribute("type", "text"); 
    }
}

function Div() {
    this.createDiv = function(id, class_name) {
        this.item = document.createElement("div"); 
        this.item.setAttribute("id", id); 
        this.item.setAttribute("class", class_name); 
    }
    this.add = function(child) {
        this.item.appendChild(child.item); 
    }
}
