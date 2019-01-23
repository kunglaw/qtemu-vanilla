import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Navbar"
import Input from "../components/Input"

class Login extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                    <div>
                        <div>
                            <label> Email </label>
                            <Input type="text" name="email" />
                        </div>
                    </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Login;