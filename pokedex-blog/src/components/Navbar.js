// Navbar.js

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {
    NavLink,
  } from "react-router-dom";

const Navbar = () => {
    return(
        <div>
        <link href="https://fonts.googleapis.com/css?family=Baloo+Bhai&display=swap" rel="stylesheet"></link>
        <AppBar position="static" style ={{backgroundColor: 'red'}}>
            <Toolbar>
            <img src="https://img.icons8.com/plasticine/100/000000/pokeball.png"/>
                <List component="nav">
                    <ListItem component="div">
                        <ListItem button>
                            <NavLink exact to="/" style={{ color: '#585858'}}><b>Pokedex</b></NavLink>  
                        </ListItem>
                        <ListItem button>
                        <NavLink to="/search" style={{ color: '#585858'}}><b>Search</b></NavLink>
                        </ListItem>
                    </ListItem >
                </List>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default Navbar;