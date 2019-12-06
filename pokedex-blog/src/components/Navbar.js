// Navbar.js

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import './styles/Navbar.css';
import ListItemText from '@material-ui/core/ListItemText';
import {
    NavLink,
  } from "react-router-dom";

const Navbar = () => {
    return(
        <div>
        <link href="https://fonts.googleapis.com/css?family=Baloo+Bhai&display=swap" rel="stylesheet"></link>
        <AppBar class="appbar" position="static">
            <Toolbar>
            <img src="https://img.icons8.com/plasticine/100/000000/pokeball.png"/>
                <List component="nav">
                    <ListItem component="div">
                        <ListItem button>
                            <NavLink class = "navlink" exact to="/" ><b>Pokedex</b></NavLink>  
                        </ListItem>
                        <ListItem button>
                        <NavLink class = "navlink" to="/search" ><b>Search</b></NavLink>
                        </ListItem>
                    </ListItem >
                </List>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default Navbar;