import {HiOutlineMail} from 'react-icons/hi'
import {MdVpnKey} from 'react-icons/md'
import {Link} from 'react-router-dom'
export default function Login(){
    return(
        <div className='login-page'>
            <div className='registration-card'>
                <h2>Sign in</h2>
                <p style={{color:'#e5e5e5'}}>Sign in to manage your accaunt</p>
                <HiOutlineMail className='input-icon' style={{ position:'absolute',  fontSize:'25px', padding:'5px', marginTop:'20px'}}/>
                <input type='text' className='login-input' placeholder='Email' />
                <MdVpnKey className='input-icon' style={{ position:'absolute',  fontSize:'25px', padding:'5px', marginTop:'20px'}}/>
                <input type='text' className='login-input' placeholder='Password' />
                <div className='remember-me'>
                    <input type='checkbox'/>Remember me
                </div>
                <button className='login-btn'>Sign in</button>
            </div>
            <div className='under-card'>Don't you have an account? <Link to='/signup' style={{textDecoration:'none', color:'cyan'}}>Sign up</Link></div>
            <div className='under-card' style={{width:'150px'}}>Forgot password? </div>

        </div>
    )
}