import React, { useState } from 'react'
import './login.css'
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useHistory} from 'react-router-dom'


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) =>{
            history.push("/")
        })
        .catch(error => alert("Cannot Login: " + error.message))
    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth)
            history.push("/")
        })
        .catch(error => alert("Cannot Create: " + error.message))
    }


    return (
        <div className ='login'>
        <Link to ='/'>
             <img className='login_logo' src='https://hackerx.org/wp-content/uploads/2013/06/Amazon-logo.png'></img>
        </Link>

        <div className='login_container'>
            <h1>Sign-In</h1>

            <form onSubmit={signIn}>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={(e)=> setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} />

                <button className='login_signIn' >Sign In</button>
            </form>

            <p>
                By sigining in you are using Jamazon,
                A Amazone Clone from john Jones.
                Your Information will not be saved or used anywhere!
                Once again this is a Fake Amazon Clone, Hope you enjoy it.

            </p>

            <button className='login_register' onClick={register}>Create Account</button>

        </div>

            
        </div>
    )
}

export default Login
