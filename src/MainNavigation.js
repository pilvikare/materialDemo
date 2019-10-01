import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles({
  ListItem: {
    display:'inline-block',
    width: 90,
    textAlign: "right"
  }

});  

const listitems = [
    {
        text:"Home",
        id: 1,
    },
    {
        text:"About",
        id: 2,
    },
    {
        text:"Contact",
        id: 3,
    }
    
      
]
  
const MainNavigation = () => {
    const classes = useStyles();
    return (
        <div>
            <List component="nav">
                {listitems.map(item => (
                <ListItem className={classes.listitem} key={item.id}>
                    <ListItemText>
                        <Typography>
                            {item.text}
                        </Typography>
                    </ListItemText>
            </ListItem>
            ))}
            </List>
        </div>
    );
};

export default MainNavigation;