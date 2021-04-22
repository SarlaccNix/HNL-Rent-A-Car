import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//Style
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import './App.css';

//Components Import
import Home  from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import  Navbar  from '../components/Navbar/Navbar';


function App() {

  const theme = createMuiTheme({
    palette: {
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

        <Route path="/signup">
         <Signup/>
        </Route>
      
     </Switch>

     </Router>

   </React.Fragment>
   </ThemeProvider>
  );
}

export default App;
