import React, { Component } from 'react';

import EmptyLayout from '../Layouts/EmptyLayout'
import SignUpForm from '../containers/SignUp/index'

class SignUp extends Component {
    render() {
        return (
            <EmptyLayout>
                <SignUpForm />
            </EmptyLayout>
        );
    }
}

export default SignUp;
