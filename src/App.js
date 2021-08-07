import './App.css';
import Login from './components/login';
import SignUp from './components/SignUp'
import ResetPassword from './components/ResetPassword';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ForgotPassword from './components/ForgotPassword';
import { ThemeContext } from './components/ThemeContext';
import { useState } from 'react';

function App() {

    const [isDarkTheme, SetTheme] = useState(true)
    function changeTheme(){
        SetTheme(!isDarkTheme)
    }

    return ( 
        <div className = "App" >
            <button onClick={changeTheme}>theme</button>
            <Router >
                <Switch >
                    <Route path='/forgotpassword'>
                        <ForgotPassword  isDarkTheme={isDarkTheme} />
                    </Route>
                    <Route path='/resetpassword'>
                        <ResetPassword  isDarkTheme={isDarkTheme} />
                    </Route>
                    <Route path = '/signin' >
                        <Login isDarkTheme={isDarkTheme} />
                    </Route> 
                    <Route path = '/signup' >
                        <SignUp  isDarkTheme={isDarkTheme} />
                    </Route> 
                    <Route path = '/' >
                        <Dashboard  isDarkTheme={isDarkTheme} />
                    </Route> 
                </Switch> 
            </Router> 
        </div>
    );
}

export default App;