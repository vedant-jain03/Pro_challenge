import React from 'react';
import "./style.css"
import {Link} from 'react-router-dom'
function Register() {
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
                            <h4>Name</h4>
                            <input type="text"/>
                        </div>
                        <div className="input-field">
                            <h4>Email</h4>
                            <input type="text" />
                        </div>
                        <div className="input-field">
                            <h4>Password</h4>
                            <input type="password" />
                        </div>
                        <div className="input-field">
                            <h4>Confirm Password</h4>
                            <input type="password"/>
                        </div>
                    </div>
                    <button className="button-1">Signup</button>
                    <span className="message-log">Already have account? <Link to="/login">Login</Link></span>
                </div>
            </div>
        </div>
    );
}

export default Register;
