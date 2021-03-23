import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {  Link } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
       <Link to="/Kashmir"> <CardMedia
          className={classes.media}
          image="https://pakistantourntravel.com/wp-content/uploads/2018/03/Azad-Kashmir-and-Christians.jpg"
          title="Contemplative Reptile"
        />
        </Link>
        <CardContent>
         <Link to="/kashmir" style={{color:'Black',textDecoration: 'none'}}> <Typography gutterBottom variant="h5" component="h2">
          <b style={{fontFamily:'Courier New'}}>KASHMIR</b>
          </Typography>
          <Typography variant="body2"  >
            <li>1 Week Tour</li>
            <li>Family = 1500 Rs</li>
            <li>Students = 800 Rs per Head</li>
            <li>Couple = 1200 Rs</li>
            
          </Typography>
          </Link>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        
      </CardActions>
    </Card>
  );
}

