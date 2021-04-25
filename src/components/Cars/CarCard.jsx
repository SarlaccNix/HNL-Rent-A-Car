import React, { useEffect, useState } from 'react';

// redux
import { connect } from 'react-redux' 

//MUI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

// Images
import image from '../../Img/Car_left_3D.png'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300,
    display: 'inline-block',
    margin: '15px 15px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
      marginLeft: 'auto',
      color: 'red'
  }
});

function CarCard(props) {
  const classes = useStyles();
  const [brand, setBrand] = useState()
  

  useEffect(()=>{
   console.log(props.Brand)
   console.log(props.Model)
}, []);




  return (

        <Card className={classes.root}>
        <CardContent>
                <CardMedia
                component="img"
                alt="Car for Rent!"
                height="140"
                image={image}
                title="Car for Rent!"
                />
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                Type
                </Typography>
                <Typography variant="h5" component="h2">
                Brand
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                Price Tag
                </Typography>
                <Typography variant="body2" component="p">
                Transmission
                </Typography>
        </CardContent>
        <CardActions>
            <Button className={classes.button} size="small">Schedule Now!</Button>
        </CardActions>
        </Card>

  );
}



export default CarCard
