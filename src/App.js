import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar'
import MainNavigation from './MainNavigation'
import Posts from './Posts/Posts'
import Footer from './footer'
import Routing from './Routing'

import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: 10,
    backgroundImage: "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)"
  },
  title: {
    flexGrow: 1
  }

});

const App = () => {
  const classes = useStyles();
  return (
    <div>
    <AppBar className={classes.root}>
        <Toolbar>
          <Typography variant="h4"className={classes.title}>
          Best Beaches
        </Typography>
        <MainNavigation />
      </Toolbar>
    </AppBar>
    <Posts />
    <Footer />
    </div>
  );
};



export default App;
