import React, {useContext} from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { MdVpnKey } from 'react-icons/md'
import { Link } from 'react-router-dom'
import api from '../api';


export default function Login(props) {
    const isDarkTheme = props.isDarkTheme
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isPasswordHidden, setIsPasswordHidden] = React.useState(true);

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const togglePasswordVisibility = (event) => {
        setIsPasswordHidden(!isPasswordHidden)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await api.authentication.login(email, password);
            if(response.status === 200) {
                console.log('Logged in!');
            }
        } catch (err) {
            if(err.response) {
                console.log(err.response);
            }
        }
    }

    return (
        <div className={isDarkTheme?'login-page-light' : 'login-page-dark'}>
            <div className={isDarkTheme? 'registration-card-light':'registration-card-dark'}>
                <h2>Sign in</h2>
                <p style={{ color: isDarkTheme?'#000000':'#e5e5e5' }}>Sign in to manage your accaunt</p>
                <div>
                    <HiOutlineMail className='input-icon' />
                    <input type='text' className={isDarkTheme? 'login-input-light':'login-input-dark'} placeholder='Email' onChange={handleEmail} />
                </div>
                <div>
                    <MdVpnKey className='input-icon' />
                    <input type={isPasswordHidden ? 'password' : 'text'} className={isDarkTheme? 'login-input-light':'login-input-dark'} placeholder='Password' onChange={handlePassword} />
                </div>
                <div className='remember-me'>
                    <input type='checkbox' onChange={togglePasswordVisibility} /> Show password
                </div>
                <div className='remember-me'>
                    <input type='checkbox' /> Remember me
                </div>
                <button className={isDarkTheme? 'login-btn-light':'login-btn-dark'} onClick={handleSubmit}>Sign in</button>
            </div>
            <div className='under-card'>Don't you have an account? <Link to='/signup' style={{ textDecoration: 'none', color: isDarkTheme?'black':'cyan' }}>Sign up</Link></div>
            <div className='under-card' style={{ width: '150px' }}><Link to='/forgotpassword' style={{color:isDarkTheme?'black':'cyan', textDecoration:'none'}}>Forgot password?</Link> </div>

        </div >
    )
}