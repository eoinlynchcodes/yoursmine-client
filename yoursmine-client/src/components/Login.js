import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';
export const Login = () => {

    const [ loginCredentials, setLoginCredentials ] = useState({
        username: '',
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
        console.log(loginCredentials);
        axios.post('http://localhost:5000/api/authentication/login', loginCredentials)
        .then(response => {
            debugger
            setLoginCredentials(response.data);
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
            <label>Username:</label>
                <Input 
                placeholder="Username"
                type="text"
                name="username"
                value={loginCredentials.username}
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
                <Button color="primary">Login</Button>
            </form>
        </div>
    )
}