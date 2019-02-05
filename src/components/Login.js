import React from 'react';

class Login extends React.Component {
    render() {
        return (
           
            <form className = 'form'>
                <h2 className = 'text-center font-light'>Log In</h2>
                <label className = 'm-b-1'>Email</label>
                <input className = 'input-block input-1 m-b-2' type = 'email' />

                <label className = 'm-b-1'>Password</label>
                <input className = 'input-block input-1 m-b-2' type = 'password' />

                <button className = 'button-block btn-dark'>Submit</button>
            </form>
        )
    }
}

export default Login;