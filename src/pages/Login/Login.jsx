import { React, useEffect, useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import backgroundimage from '../../Img/vacation-travel-with-car-concept-rental-hired-car--RLD828P.jpg';
import { authOptions, authLogout } from '../../service/auth';
import { googleProvider } from '../../config/authMethods';

//Redux
import { connect } from 'react-redux'



const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      backgroundImage: `url(${backgroundimage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
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
                    <div>
                    This is the Login Page
                    </div>
                    <button onClick={() => handleEvent(googleProvider)}>Google</button>
                        <ul>
                            <li>
                                <Link to="/">Go Home!</Link>
                            </li>
                            <li>
                                <Link to="/signup">Signup!</Link>
                            </li>
                        </ul>
            </div> 
    );
}

const mapStatetoProps = (state) =>{

    
    return {loggedin: state.authreducer.isLoggedIn}

}

export default withRouter(connect(mapStatetoProps)(Login));

