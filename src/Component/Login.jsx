import React from 'react';
import {Link, useHistory} from 'react-router-dom'
import './style.css'
function Login() {
    return (
        <div className="login">
            <div className="container-lr">
                <div className="left">
                    <h3 className="heading">Go With Flow</h3>
                    <img src="https://cdn.dribbble.com/users/14268/screenshots/6410271/k.png?compress=1&resize=400x300" alt="" />
                    <p className="para">Make your algorithm, website or any flowchart, save it in a project and download!</p><br />
                    <p className="para">As Simple as that!</p><br />
                </div>
                <div className="right">
                    <h3>Welcome</h3>
                    <h4>Login to your account</h4>
                    <div className="input_container">
                        <div className="input-field">
                            <h4>Username</h4>
                            <input type="text" autoComplete="true" />
                        </div>
                        <div className="input-field">
                            <h4>Password</h4>
                            <input type="password"/>
                        </div>
                    </div>
                    <Link className="button-1" to="/" >Login</Link>
                    <span className="message-log">Not Register? <Link to="/register">Register</Link></span>
                </div>
            </div>
        </div>
    );
}

export default Login;
