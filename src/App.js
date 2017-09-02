import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Posts from './Pages/Posts'
import LogIn from './Pages/LogIn'
import SignUp from './Pages/SignUp'

import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/posts' component={Posts}/>
                <Route path='/login' component={LogIn}/>
                <Route path='/signup' component={SignUp}/>
            </Switch>
        );
    }
}

export default App;
