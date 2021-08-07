import React from 'react';
import {MdVpnKey} from 'react-icons/md'
export default function ResetPassword(props){
    const isDarkTheme = props.isDarkTheme
    const [isPasswordHidden, setIsPasswordHidden] = React.useState(true);

    const togglePasswordVisibility = (event) => {
        setIsPasswordHidden(!isPasswordHidden);
    }
    return(
        <div className={isDarkTheme?'login-page-light' : 'login-page-dark'}>
        <div className={isDarkTheme? 'registration-card-light':'registration-card-dark'}>
            <h2>Reset  Password</h2>
            <p style={{ color: isDarkTheme?'#000000':'#e5e5e5' }}>Please enter your new password </p>
            <div>
                <MdVpnKey className='input-icon' />
                <input type={isPasswordHidden ? 'password' : 'text'} className={isDarkTheme? 'login-input-light':'login-input-dark'} placeholder='new password' />
            </div>
            <div>
                <MdVpnKey className='input-icon' />
                <input type={isPasswordHidden ? 'password' : 'text'} className={isDarkTheme? 'login-input-light':'login-input-dark'} placeholder='consfirm new password' />
            </div>
            <div className="remember-me">
                <input type='checkbox' onChange={togglePasswordVisibility} /> Show password
            </div>
            <button className={isDarkTheme? 'login-btn-light':'login-btn-dark'}>Reset password</button>
        </div>

    </div >
    )
}