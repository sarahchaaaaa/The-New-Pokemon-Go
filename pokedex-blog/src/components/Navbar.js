// Navbar.js

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const Navbar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                Dashboard
                <List component="nav">
                    <ListItem component="div">
                        <ListItem button>
                            <ListItemText inset>
                                <TypoGraphy color="inherit" variant="title">
                                    Home
                                </TypoGraphy>
                            </ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText inset>
                                <TypoGraphy color="inherit" variant="title">
                                    PokeDex
                                </TypoGraphy>
                            </ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText inset>
                                <TypoGraphy color="inherit" variant="title">
                                    Search
                                </TypoGraphy>
                            </ListItemText>
                        </ListItem>
                    </ListItem >
                </List>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default Navbar;