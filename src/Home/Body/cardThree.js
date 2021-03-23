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
       <Link to="/shogran"> <CardMedia
          className={classes.media}
          image="http://carawaan.pk/wp-content/uploads/2018/10/6-25.jpg"
          title="Contemplative Reptile"
        />
        </Link>
        <CardContent>
         <Link to="/shogran" style={{color:'Black',textDecoration: 'none'}}> <Typography gutterBottom variant="h5" component="h2">
          <b style={{fontFamily:'Courier New'}}>SHOGRAN</b>
          </Typography>
          <Typography variant="body2" >
          <li>2 Weeks Tour</li>
            <li>Family = 2000 Rs</li>
            <li>Students = 1000 Rs per Head</li>
            <li>Couple = 1500 Rs</li>
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
