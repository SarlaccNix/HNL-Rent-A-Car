import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Login(props) {
    return (
        <div>
            This is the Login Page
            <div>
                <ul>
                    <li>
                        <Link to="/">Go Home!</Link>
                    </li>
                    <li>
                        <Link to="/signup">Signup!</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Login;

