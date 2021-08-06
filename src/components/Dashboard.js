import {Link} from 'react-router-dom'
export default function Dashboard(){
    return(
        <div>
            <Link to='/signin'>Sign in </Link>
            <Link to='/signup'>Sign up </Link>
            <Link to='/forgotpassword'>Forgot password</Link>
        </div>
    )
}