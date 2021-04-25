import { React, useEffect, useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

import backgroundimage from '../../Img/vacation-travel-with-car-concept-rental-hired-car--RLD828P.jpg';
import { authOptions, authLogout } from '../../service/auth';
import { googleProvider } from '../../config/authMethods';

//Redux
import { connect } from 'react-redux'

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


const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      backgroundImage: `url(${backgroundimage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    button:{
            marginRight: 'auto',
            color: 'red',
            fontSize: 20,
            margin: theme.spacing(1),
            background: 'lightgray'  
    },
    card:{
        padding: theme.spacing(2),
        textAlign: 'center',
        maxWidth: 345,
        margin: '10%',
        align: 'center'
    },
    title:{
        fontSize: 25,
        justify: 'center',
    }
  }));



function Login(props) {
    const classes = useStyles();
    const [loggedin, setLoggedIn]  = useState();

    useEffect(() => {
        setLoggedIn(props.loggedin);
    }, [props.loggedin])

    const handleEvent = async(provider) => {
        const res = await authOptions(provider);
       return window.location = "/";
    }
    

    return (
        loggedin ? window.location="/":
            <div className={classes.root}>
                <Grid container 
                xs={12}
                direction="column"
                justify="space-evenly"
                 alignItems="center"
                > 
                    <Card className={classes.card}>
                        <Grid item >
                            <div className={classes.title}>
                                Login
                            </div>
                        </Grid>
                        <Grid item>
                            <Button className={classes.button} onClick={() => handleEvent(googleProvider)}>Google</Button>
                        </Grid>
                    </Card>
                </Grid>
            </div> 
    );
}

const mapStatetoProps = (state) =>{

    
    return {loggedin: state.authreducer.isLoggedIn}

}

export default withRouter(connect(mapStatetoProps)(Login));

