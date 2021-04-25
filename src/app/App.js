import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//Style
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline'
import './App.css';

//Components Import
import Home  from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Rent from '../pages/Rent/Rent';
import  Navbar  from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer'


function App() {

  const theme = createMuiTheme({
    palette: {
      background:{
        default: '#F2F2F2' 
      },
      primary: {
        main: "#0F2433"
      },
      secondary: {
        main: "#27BCAF"
      }
    }
  });

  return (
  <ThemeProvider theme={theme}>  
  <CssBaseline />
   <React.Fragment>
     <Router>

     
     <Navbar/>
     <Switch>     
     
       <Route exact path="/">
         <Home/>
        </Route>

        <Route path="/login">
         <Login/>
        </Route>

        <Route path="/rent">
         <Rent/>
        </Route>
      
     </Switch>

     </Router>

   </React.Fragment>
   </ThemeProvider>
  );
}

export default App;
