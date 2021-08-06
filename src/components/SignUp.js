import { HiOutlineMail } from 'react-icons/hi'
import { MdVpnKey } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import React from 'react'

export default function Login() {
    const [isPasswordHidden, setIsPasswordHidden] = React.useState(true);

    const togglePasswordVisibility = (event) => {
        setIsPasswordHidden(!isPasswordHidden);
    }

    return (
        <div className='login-page'>
            <div className='registration-card' style={{ height: '70vh' }}>
                <h2>Sign Up</h2>
                <p style={{ color: '#e5e5e5' }}>Create your account</p>
                    <div>
                        <CgProfile className='input-icon' />
                        <input type='text' className='login-input' placeholder='Name' />
                    </div>
                    <div>
                        <CgProfile className='input-icon' />
                        <input type='text' className='login-input' placeholder='Surname' />
                    </div>
                    <div>
                        <HiOutlineMail className='input-icon' />
                        <input type='text' className='login-input' placeholder='Email' />
                    </div>
                    <div>
                        <MdVpnKey className='input-icon' />
                        <input type={isPasswordHidden ? 'password' : 'text'} className='login-input' placeholder='Password' />
                    </div>
                    <div className="remember-me">
                        <input type='checkbox' onChange={togglePasswordVisibility} /> Show password
                    </div>
                    <div className='remember-me'>
                        <input type='checkbox' /> I agree to terms of use
                    </div>
                    <button className='login-btn'>Sign up</button>
            </div>
            <div className='under-card'>Do you have an account? <Link to='/signin' style={{ textDecoration: 'none', color: 'cyan' }}>Sign in</Link></div>

        </div>
    )
}