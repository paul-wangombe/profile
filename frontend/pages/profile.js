import React from 'react';
import axios from 'axios';
import {Cookies} from 'react-cookie';
import Link from "next/link";
import Layout from "../components/layout";


const serverUrl = 'http://localhost:8000';

// setup cookies
const cookie = new Cookies();


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: null,
            error: 'Please login in order to view this message',
            LoggedIn: false
        }
    }

    componentDidMount() {
        const token = cookie.get('token');
        console.log(token)
        if (token) {
            this.setState({LoggedIn: true})
        }
        axios({
            method: 'get',
            url: `${serverUrl}/api/v1/accounts/profile/`,
            headers: {'Authorization': `Bearer ${token}`}
        })
            .then(res => {
                const profile = res.data;
                this.setState({profile: profile})
            })

    };

    render() {
        const {profile, LoggedIn} = this.state;
        return (
            <Layout>
                <div id='message'>
                    {LoggedIn ?
                        <div>
                            {profile ?
                                <div key={profile.id}>
                                    <p>ID: {profile.id}</p>
                                    <p>Username: {profile.username}</p>
                                    <p>Full names: {profile.first_name} {profile.last_name}</p>
                                    <p>{profile.email}</p>
                                </div> :
                                null
                            }
                        </div> :
                        <p>
                            Please login in order to view your profile <Link href="/login"><a>Login </a></Link>
                        </p>
                    }
                </div>
                <style jsx>{`
                    #message {
                        text-align: center;
                    }
                `}</style>
            </Layout>
        )
    }

}

export default Profile;



