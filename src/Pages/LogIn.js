import React, { Component } from 'react';

import EmptyLayout from '../Layouts/EmptyLayout'
import LogInForm from '../containers/LogInForm'

class LogIn extends Component {
    render() {
        return (
            <EmptyLayout>
                <LogInForm />
            </EmptyLayout>
        );
    }
}

export default LogIn;
