import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Navbar"
import Input from "../components/Input"

class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <Input type="email" name="email" />
                <Input type="password" name="password" />
            </React.Fragment>
        );
    }
}

export default Login;