import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

class Auth extends React.Component {

    state = {
        login: true
    }

    render() {
    
        return ( 
            <div className = 'full-section bg-image-2'>
                <div className = 'container'>


                    {this.state.login ?
                        <Login />
                        : 
                        <Register />
                    }

                </div>
            </div>
        )
    }
}

export default Auth;