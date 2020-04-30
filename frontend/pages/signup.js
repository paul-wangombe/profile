import React from 'react';
import axios from 'axios';
import {Cookies} from 'react-cookie';
import Router from "next/router";
import Link from "next/link";
import Layout from "../components/layout";


const serverURL = 'http://localhost:8000';

// setup cookies
const cookies = new Cookies();


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: cookies.get('token') || null,
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            password: '',
            password_confirm: '',
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = async event => {
        event.preventDefault();
        const data = {
            username: this.state.username,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm,
        };

        try {
            const response = await axios.post(`${serverURL}/api/v1/accounts/register/`, data)
        } catch (error) {
            console.log(error)
        }
        Router.push('/login')
    };

    render() {
        return (
            <Layout>
                <div className="col-sm-6 mx-auto">
                    <h1 id='login-title'>Sign up</h1>
                    <form onSubmit={this.handleSubmit}>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="first_name"
                                aria-describedby="firstnameHelp"
                                placeholder="First Name"
                                name="first_name"
                                value={this.state.first_name}
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="last_name"
                                aria-describedby="lastnameHelp"
                                placeholder="Last Name"
                                name="last_name"
                                value={this.state.last_name}
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                aria-describedby="usernameHelp"
                                placeholder="Username"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="Email"
                                name='email'
                                value={this.state.email}
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                name='password'
                                value={this.state.password}
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword2"
                                placeholder="Confirm Password"
                                name="password_confirm"
                                value={this.state.password_confirm}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-success" id='login-submit'>Sign up</button>
                    </form>
                    <br/>
                    <p>Already have an account? <Link href='/login'><a>Login</a></Link></p>
                </div>
                <style jsx>
                    {`
                        #login-title, #login-submit {
                            text-align: center
                            }
                    `}
                </style>
            </Layout>
        )
    }

}

export default Signup;
