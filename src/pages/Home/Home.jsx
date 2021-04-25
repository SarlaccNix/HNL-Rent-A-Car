import { React, useEffect, useState, useCallback }  from 'react';


// redux
import { connect } from 'react-redux' 

//firebase
import { getCars } from '../../service/database'

//MUI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme)=> ({
    cards: {
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
      fontSize: 30,
      justify: 'center',
      margin: '1%'
    },
    subtitle:{
        fontSize: 16,
        align: 'center',
        margin: '1%'
    },
    pos: {
      marginBottom: 12,
    },
    button: {
        marginLeft: 'auto',
        color: 'red'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      grid: {
        flexGrow: 1,
      },
}));

const Home = ( props ) => {
    const classes = useStyles();
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loggedin, setLoggedIn] = useState();


useEffect(()=>{
    let parsedCars = [];
    setLoggedIn(props.loggedin)
    setLoading(true);
    getCars();
    parsedCars = JSON.parse(localStorage.getItem("cars"))
    setCars(parsedCars);
    setLoading(false);
}, []);

const loginHandler=(e)=>{
    window.location="/login"
}

const rentalHandler=useCallback((car)=>{
    let stringcar = JSON.stringify(car)
   localStorage.setItem("rental", stringcar)
   window.location="/rent"
})

    if (loading) {
        return <h1>... Loading ...</h1>
    }

    

    return (
       
          <div className={classes.root}>
              <div className={classes.grid}>
                    <Grid container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center"
                    >
                    <Grid item xs={12} className={classes.title}>
                        <h1>Welcome to HNL Rent-A-Car</h1>
                    </Grid>

                    <Grid item xs={6} className={classes.subtitle}>
                            <h2>Ready for your next adventure?</h2>
                    </Grid>
                    </Grid>
                </div>

                    <Grid container
                        display="inline-block"
                        spacing={0}
                        direction="row"
                        alignItems="center"
                        justify="center"
                    >
                        {cars.map((cars) =>(
                            <div className={classes.cards}  key={cars.id}>
                                <Card >
                                    <CardContent>
                                            <CardMedia
                                            component="img"
                                            alt="Car for Rent!"
                                            height="140"
                                            image={cars.image}
                                            title="Car for Rent!"
                                            />
                                            <Typography className={classes.subtitle} color="textSecondary" gutterBottom>
                                            {cars.Type}
                                            </Typography>
                                            <Typography variant="h5" component="h2">
                                            {cars.Brand} {cars.Model}
                                            </Typography>
                                            <Typography className={classes.pos} color="textSecondary">
                                            Price: ${cars.Price} per day
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                            Transmission: {cars.Transmission}
                                            </Typography>
                                    </CardContent>
                                    <CardActions>
                                        {loggedin ? 
                                            cars.Qty > 0 ? (<Button onClick={()=>(rentalHandler(cars))} className={classes.button} size="medium">Schedule Now!</Button>
                                                ) : (
                                               <Button className={classes.button} disabled size="medium">Unavailable!</Button>
                                               )
                                            : 
                                            (<Button className={classes.button} onClick={()=>(loginHandler())} size="medium">Log in to Schedule!</Button>) }
                                                 
                                    </CardActions>
                                </Card>
                        </div>
                        ))}
                    </Grid>
                </div>
    );
}

const mapStatetoProps = (state) =>{
  
    return {
             cars: state.databaseReducer.cars,
             loggedin: state.authreducer.isLoggedIn
            }

}


   

export default connect(mapStatetoProps)(Home)