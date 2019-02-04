import React from 'react';
import Login from '../components/Login';

class Auth extends React.Component {
    render() {
    
        return ( 
            <div className = 'full-section bg-image'>
                <div className = 'container'>
                
                    <Login />
                
                </div>
            </div>
        )
    }
}

export default Auth;