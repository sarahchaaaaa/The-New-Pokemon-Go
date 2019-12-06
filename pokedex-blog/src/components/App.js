// App.js

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from '@material-ui/core/Button';
// import Bookmarks from '@material-ui/icons/Bookmarks';
import './styles/App.css';
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Search from './Search';
import PokeApp from './PokeApp';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
        <div>
          <BrowserRouter>
      <div>
        <ul className="header">
          <Navbar/>
          {/* <li><NavLink exact to="/">Home</NavLink> </li>
          <li><NavLink to="/search">Search</NavLink></li>
           */}
        </ul>
        <div className="content">
            <Route exact path="/" component={PokeApp} />
            <Route path="/search" component={Search} />
        </div>
      </div>
      </BrowserRouter>
        </div>
    );
  }
}

export default App;