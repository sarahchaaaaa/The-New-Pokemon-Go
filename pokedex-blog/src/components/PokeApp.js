import React, { Component } from 'react';
import PokeList from './PokeList';
import DetailView from './DetailView';
import Pokemon from '../Pokemon';
import './styles/PokeApp.css';

class PokeApp extends Component {
    constructor() {
      super();
      this.state = {
        pokemon: {}
      };
  
      this.handleOnClick = this.handleOnClick.bind(this);
    }
  
    handleOnClick(id) {
      fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(data => {
          const pokemon = new Pokemon(data);
  
          this.setState({ pokemon });
        })
        .catch(err => console.log(err));
    }
  
    render() {
      return (
        <div className="PokeApp">
	  <DetailView pokemon={this.state.pokemon} />
          <PokeList handleOnClick={this.handleOnClick} />
        </div>
      );
    }
  }
  
  export default PokeApp;
  
