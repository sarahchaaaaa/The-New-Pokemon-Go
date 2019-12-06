import React, { Component } from 'react';
import './styles/Search.css';

class Search extends Component{
    constructor() {
        super();
        this.state = {
          pokemon: {}
        };
        // const input = document.getElementById("search-input");
        // const searchBtn = document.getElementById("search-btn");

        // const expand = () => {
        //     searchBtn.classList.toggle("close");
        //     input.classList.toggle("square");
        // };

        // searchBtn.addEventListener("click", expand);
    }  
  render() {  
  return (
<div class="Search">
    <input type="text" class="input" placeholder="Enter Pokemon.."/>
    <input type="button" value="search" class="close-btn"/>
</div>
  )
  }
}

export default Search;
