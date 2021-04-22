import { React, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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



export default function Navbar() {
  const classes = useStyles();
  const [loggedin, setLoggedIn]  = useState(false);


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
          <Button  onClick = {() => { setLoggedIn(false) }} color="inherit">Logout</Button>
          :<Button onClick = {() => { setLoggedIn(true) }}  color="inherit">Login</Button>
          }
          
        </Toolbar>
      </AppBar>
    </div>
  );
}