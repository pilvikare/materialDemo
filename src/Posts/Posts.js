import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  postitem: {
    display: 'inline-block',
    width: 400,
    textAlign: 'right'
  }
})

const post = [
  {
    title: 'Ngapali Beach – Ngapali, Myanmar',
    image: 'https://bigseventravel.com/wp-content/uploads/2019/07/Ngapali-Beach-Myanmar.jpeg',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    id: 1
  },
  {
    title: 'Elafonisi Beach – Greece',
    image: 'https://bigseventravel.com/wp-content/uploads/2019/07/Elafonissi-Beach-Greece.jpg',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    id: 2
  },
  {
    title: 'Sunset Beach – Oahu, Hawaii',
    image: 'https://bigseventravel.com/wp-content/uploads/2019/07/sunset-1024x576.jpg',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    id: 3
  }
  
]


const Posts = () => {
  const classes = useStyles();
  return (
    <div style={{marginTop:170, padding:20}}>
  
      <Grid 
        container 
        direction="row" 
        justify="flex-start" 
        alignItems="flex-start"
        spacing={2}>
      

        {post.map(postitem => (
          <Grid item>
            <Card className= {classes.postitem} key={postitem.id}>
                <CardMedia
                  component="img"
                  alt={postitem.title}
                  height="200"
                  image={postitem.image}
                  text="text"
                  />
                <CardContent>
                  <Typography>{postitem.title}</Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" color="primary" href='https://www.bc.fi/'>Read more</Button>
                </CardActions>
            </Card>
            </Grid>
            ))}
          </Grid>
      </div>
          
    );
  };

export default Posts;