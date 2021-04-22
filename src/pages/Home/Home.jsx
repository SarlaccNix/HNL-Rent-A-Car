import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
    return (

            <div>
                <h1>You came Home!</h1>
                <div className="market-display">
                    <ul>
                        <li>
                        <Link to="/signup">Signup!</Link>
                        </li>
                        <li>
                        <Link to="/login">Login!</Link>
                        </li>
                    </ul>
                </div>
            </div>
    );
}

export default Home;