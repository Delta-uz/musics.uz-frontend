import {HiOutlineMail} from 'react-icons/hi'
export default function ForgotPassword(){
    return(
        <div className='login-page'>
        <div className='registration-card'>
            <h2>Forgot password?</h2>
            <p style={{ color: '#e5e5e5' }}>Please enter your registered email addres. We will send instructions to help reset your password </p>
            <div>
                <HiOutlineMail className='input-icon'/>
                <input type='text' className='login-input' placeholder='Email'/>
            </div>
            <button className='login-btn'>Send reset instructions</button>
        </div>

    </div >
    )
}