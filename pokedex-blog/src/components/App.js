// App.js

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from '@material-ui/core/Button';
// import Bookmarks from '@material-ui/icons/Bookmarks';
import './styles/App.css';
import PokeApp from './PokeApp';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
        <div>
        <Navbar/>
        <PokeApp/>

        </div>
    );
  }
}

export default App;