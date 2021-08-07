import {HiOutlineMail} from 'react-icons/hi'
export default function ForgotPassword(props){
    const isDarkTheme = props.isDarkTheme
    return(
        <div className={isDarkTheme?'login-page-light' : 'login-page-dark'}>
        <div className={isDarkTheme? 'registration-card-light':'registration-card-dark'}>
            <h2>Forgot password?</h2>
            <p style={{ color: isDarkTheme?'#000000':'#e5e5e5' }}>Please enter your registered email addres. We will send you recovery link </p>
            <div>
                <HiOutlineMail className='input-icon'/>
                <input type='text' className={isDarkTheme? 'login-input-light':'login-input-dark'} placeholder='Email'/>
            </div>
            <button className={isDarkTheme? 'login-btn-light':'login-btn-dark'}>Send recovery link</button>
        </div>

    </div >
    )
}