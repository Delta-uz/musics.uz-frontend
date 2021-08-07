import { HiOutlineMail } from 'react-icons/hi'
import { MdVpnKey } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import React from 'react'

export default function Login(props) {
    const isDarkTheme = props.isDarkTheme
    const [isPasswordHidden, setIsPasswordHidden] = React.useState(true);

    const togglePasswordVisibility = (event) => {
        setIsPasswordHidden(!isPasswordHidden);
    }

    return (
        <div className={isDarkTheme?'login-page-light' : 'login-page-dark'}>
            <div className={isDarkTheme? 'registration-card-light':'registration-card-dark'} style={{ height: '70vh' }}>
                <h2>Sign Up</h2>
                <p style={{ color: isDarkTheme?'#000000':'#e5e5e5' }}>Create your account</p>
                    <div>
                        <CgProfile className='input-icon' />
                        <input type='text' className={isDarkTheme? 'login-input-light':'login-input-dark'} placeholder='Name' />
                    </div>
                    <div>
                        <CgProfile className='input-icon' />
                        <input type='text' className={isDarkTheme? 'login-input-light':'login-input-dark'} placeholder='Surname' />
                    </div>
                    <div>
                        <HiOutlineMail className='input-icon' />
                        <input type='text' className={isDarkTheme? 'login-input-light':'login-input-dark'} placeholder='Email' />
                    </div>
                    <div>
                        <MdVpnKey className='input-icon' />
                        <input type={isPasswordHidden ? 'password' : 'text'} className={isDarkTheme? 'login-input-light':'login-input-dark'} placeholder='Password' />
                    </div>
                    <div className="remember-me">
                        <input type='checkbox' onChange={togglePasswordVisibility} /> Show password
                    </div>
                    <div className='remember-me'>
                        <input type='checkbox' /> I agree to terms of use
                    </div>
                    <button className={isDarkTheme? 'login-btn-light':'login-btn-dark'}>Sign up</button>
            </div>
            <div className='under-card'>Do you have an account? <Link to='/signin' style={{ textDecoration: 'none', color: isDarkTheme?'black':'cyan' }}>Sign in</Link></div>

        </div>
    )
}