import React from 'react';
import axios from 'axios';
import {Cookies} from 'react-cookie';
import Link from "next/link";
import Router from "next/router";
import Layout from "../components/layout";


const serverURL = 'http://localhost:8000';

// setup cookies
const cookies = new Cookies();


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: cookies.get('token') || null,
            username: '',
            password: '',
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    };

    handleSubmit = async event => {
        event.preventDefault();
        const data = {
            username: this.state.username,
            password: this.state.password,
        };
        try {
            const response = await axios.post(`${serverURL}/api/v1/token/`, data);
            const token = response.data.access;
            cookies.set('token', token);
            this.setState({token: token});
            console.log(token)
        } catch (error) {
            console.log(error)
        }
        this.setState({username: '', password:''})
        Router.push('/profile')
    };

    render() {
        return (
            <Layout>
                <div className="col-sm-6 mx-auto">
                    <h1 id='login-title'>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input
                                type="username"
                                className="form-control"
                                id="username"
                                aria-describedby="usernameHelp"
                                placeholder="username"
                                name="username"
                                onChange={this.handleChange}
                                value={this.state.username}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                name="password"
                                onChange={this.handleChange}
                                value={this.state.password}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-success" id='login-submit'>Login</button>
                    </form>
                    <br/>
                    <p>Don't have an account? <Link href="/signup"><a>Sign up</a></Link></p>
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

export default Login;
