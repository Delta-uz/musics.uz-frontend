import './App.css';
import Login from './components/login';
import SignUp from './components/SignUp'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ForgotPassword from './components/ForgotPassword';

function App() {
    return ( 
        <div className = "App" >
            <Router >
                <Switch >
                    <Route path='/forgotpassword'>
                        <ForgotPassword />
                    </Route>
                    <Route path = '/signin' >
                        <Login />
                    </Route> 
                    <Route path = '/signup' >
                        <SignUp />
                    </Route> 
                    <Route path = '/' >
                        <Dashboard />
                    </Route> 
                </Switch> 
            </Router> 
        </div>
    );
}

export default App;