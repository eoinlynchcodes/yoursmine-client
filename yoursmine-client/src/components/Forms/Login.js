import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';

export const Login = () => {

    const [ loginCredentials, setLoginCredentials ] = useState({
        emailAddress: '',
        password: ''
    });

    const handleChange = (event) => {
        setLoginCredentials({
            ...loginCredentials,
            [event.target.name]: event.target.value
        });
    }
    
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        debugger
        console.log(loginCredentials);
        axios.post('http://localhost:3333/api/auth/login', loginCredentials)
        .then(response => {
            setLoginCredentials(response.data);
            localStorage.setItem(response.data.userID, 'userID');
            history.push('/sellerDashboard');
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div>
            <form onSubmit={event => handleSubmit(event)}>
            <h3>Login. Start Selling.</h3>
            <label>Email Address:</label>
                <Input 
                placeholder="Email Address:"
                type="text"
                name="emailAddress"
                value={loginCredentials.emailAddress}
                onChange={event => handleChange(event)}
                />
                <br/>

                <label>Password:</label>
                <Input 
                placeholder="Password"
                type="text"
                name="password"
                value={loginCredentials.password}
                onChange={event => handleChange(event)}
                />
                <br/>

                <Button type="submit" color="primary">Login</Button>
            </form>
        </div>
    )
}