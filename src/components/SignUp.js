import {HiOutlineMail} from 'react-icons/hi'
import {MdVpnKey} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {Link} from 'react-router-dom'
export default function Login(){
    return(
        <div className='login-page'>
            <div className='registration-card' style={{height:'470px'}}>
                <h2>Sign Up</h2>
                <p style={{color:'#e5e5e5'}}>Create your accaunt</p>
                <CgProfile className='input-icon'/>
                <input type='text' className='login-input' placeholder='Name' />
                <CgProfile className='input-icon'/>
                <input type='text' className='login-input' placeholder='Surname' />
                <HiOutlineMail className='input-icon' />
                <input type='text' className='login-input' placeholder='Email'/>
                <MdVpnKey className='input-icon' />
                <input type='text' className='login-input' placeholder='Password' />
                <div className='remember-me'>
                    <input type='checkbox'/> I agree to terms of use
                </div>
                <button className='login-btn'>Sign up</button>
            </div>
            <div className='under-card'>Do you have an account? <Link to='/signin' style={{textDecoration:'none', color:'cyan'}}>Sign in</Link></div>

        </div>
    )
}