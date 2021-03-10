import React from 'react'
import Footer from '../FooterComponent/Footer'
import LoginNavbar from './LoginNavbar'
import LoginPage from './LoginPage'

const Login = () => {
    return (
        <div>
            <LoginNavbar/>
            <LoginPage />
            <Footer/>
        </div>
    )
}

export default Login;
