import React from 'react';
import { Link } from 'react-router-dom';

function Signup(props) {
    return (
        <div>
            This is the signup page

            <div>
                <ul>
                    <li>
                        <Link to="/">Go Home!</Link>
                    </li>
                    <li>
                        <Link to="/login">Login!</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Signup;