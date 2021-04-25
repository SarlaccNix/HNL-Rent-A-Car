import { React, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

//Redux 
import { connect } from 'react-redux'

// Components
import { authOptions, authLogout, authListener} from '../../service/auth';
import navimage from '../../Img/Car_left_3D.png'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  subtitle:{
    flexGrow: 1,
    fontSize: 15
  }
}));



function Navbar(props) {
  const classes = useStyles();
  const [loggedin, setLoggedIn]  = useState(props.loggedin);
  const [user, setUser] = useState(props.user);
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    loggedin ? setAvatar(props.avatar) : setAvatar(null)
}, [props.loggedin])
  

 const handleLogout=(e)=>{
    authLogout();
    window.location="/";
  }

  


  return (
    
    <div className={classes.root}>
      <AppBar color="primary" position="static">
        <Toolbar>

          <Typography variant="h4" className={classes.title}>
            HNL Rent-A-Car
          </Typography>

          <img width="200" height="150" src={navimage}></img>


         
          {loggedin?
          <Grid container
          spacing={2}
          display="inline-block"
          justify="flex-end">
          <Grid item>
          <Typography variant="h4" className={classes.title}> {user}
          </Typography>
          </Grid>
          <Avatar src={avatar}></Avatar>
          <Button onClick = {() => { handleLogout() }} color="inherit">Logout</Button>
          </Grid>
         
          :
          
          <Button href="/login" color="inherit">Login</Button>

          }
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStatetoProps = (state) =>{
  
    return {
            loggedin: state.authreducer.isLoggedIn,
            user: state.authreducer.user,
            avatar: state.authreducer.avatar
          }

}

export default connect(mapStatetoProps)(Navbar)