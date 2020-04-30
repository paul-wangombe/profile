import React from 'react'
import Layout from "../components/layout";


class Index extends React.Component {

    render() {
        return (
            <Layout>
                <div id='home'>
                    <p>Hello there. This is the homepage</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <style jsx>{`
                    #home {
                        text-align: center;
                    }
                `}</style>
            </Layout>
        )
    }
}


export default Index;


