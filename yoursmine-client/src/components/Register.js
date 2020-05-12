import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';

export const Register = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        debugger
        console.log(registerObject);
            axios.post('http://localhost:3333/authentication/register', registerObject)
            .then(res => {
                // setRegisterObject(res.data);
                history.push('/login');
            })  
            .catch(error => {
                console.log(error);
            })  
    }
    
    const [ registerObject, setRegisterObject ] = useState({
        firstName: '',
        lastName: '',
        username: '',
        emailAddress: '',
        password: '',
        dateOfBirth: ''
    });
    
    const history = useHistory();
    
    const handleChange = (event) => {
            setRegisterObject({
            ...registerObject,
            [event.target.name]: event.target.value });
    };

    return (
        <div>
            {/* Scope for using Material UI & Formki here */}
            <form>
                <h1>Register:</h1>
                <label>First Name:</label>
                <Input 
                placeholder="First Name"
                type="text"
                name="firstName"
                value={registerObject.firstName}
                onChange={handleChange}
                />
                <br/>
                <label>Last Name:</label>
                <Input 
                placeholder="Last Name"
                type="text"
                name="lastName"
                value={registerObject.lastName}
                onChange={handleChange}
                />
                <br/>
                <label>Username:</label>
                <Input
                placeholder="Username:"
                type="text"
                name="username"
                value={registerObject.username}
                onChange={handleChange}
                />
                <br/>
                <label>Email Address:</label>
                <Input 
                placeholder="Email Address"
                type="text"
                name="emailAddress"
                value={registerObject.emailAddress}
                onChange={handleChange}
                />
                <br/>
                <label>Password:</label>
                <Input 
                placeholder="Password"
                type="text"
                name="password"
                value={registerObject.password}
                onChange={handleChange}
                />
                <br/>
                <label>Date of Birth</label>
                <Input 
                type="date"
                name="dateOfBirth"
                value={registerObject.dateOfBirth}
                onChange={handleChange}
                />
                <br/>
                <Button onSubmit={event => handleSubmit(event)}>Register</Button>
            </form>
        </div>
    )
}