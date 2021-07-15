import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { auth } from './firebase';
import { useHistory } from 'react-router';

const myStyle = {
    color: "#074bb0"
};

const Login = () => {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                if (auth) {
                    console.log('Successful Login');
                    history.push('/');
                }
            }).catch(error => alert(error.message))
    }

    const signUP = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // Successfully added 

                if (auth) {
                    console.log('Successful Registration');
                    history.push('/');
                }
            }).catch(error => alert(error.message))
    }

    return (
        <>
            <div className="login">
                <Link to='/'>
                    <img
                        className="login-logo"
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt="Main"
                    />
                </Link>

                <div className="login-container">
                    <h1>Sign In</h1>
                    <form>
                        <h5>Email</h5>
                        <input type="text" value={email}
                            onChange={event => setEmail(event.target.value)} />

                        <h5>Password</h5>
                        <input type="text" value={password}
                            onChange={event => setPassword(event.target.value)} />

                        <button className="login-signInButton" type="submit"
                            onClick={signIn}>Continue
                        </button>
                    </form>
                    <p>By continuing, you agree to Amazon's <span style={myStyle}>Conditions of Use</span> and <span style={myStyle}>Privacy Notice</span>.</p>
                    <hr />

                    <span className="newUser">New to Amazon?</span>

                    <button className="login-registerButton"
                        type="submit" onClick={signUP}>Create Your Amazon Account
                    </button>
                </div>
            </div>
        </>
    )
}

export default Login;
