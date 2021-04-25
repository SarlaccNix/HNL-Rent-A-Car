import { React, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

//Redux 
import { connect } from 'react-redux'

// Components
import { authOptions, authLogout, authListener} from '../../service/auth';



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
}));



function Navbar(props) {
  const classes = useStyles();
  const [loggedin, setLoggedIn]  = useState();

  useEffect(() => {
    setLoggedIn(props.loggedin);
}, [props.loggedin])
  

 const handleLogout=(e)=>{
    authLogout();
    setLoggedIn(false);
    window.location="/";
  }



  return (
    
    <div className={classes.root}>
      <AppBar color="primary" position="static">
        <Toolbar>
          
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Typography variant="h4" className={classes.title}>
            HNL Rent-A-Car
          </Typography>
         
          {loggedin?
          <Button onClick = {() => { handleLogout() }} color="inherit">Logout</Button>
          :<Button href="/login" color="inherit">Login</Button>
          }
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStatetoProps = (state) =>{
  
    return {loggedin: state.authreducer.isLoggedIn}

}

export default connect(mapStatetoProps)(Navbar)