import React, { Component } from 'react';
import { Provider } from 'react-redux'
import SignUpForm from './SignUpForm';
import store from '../../store';
import FormSubmit from './FormSubmit';

class SignUpFormContainer extends Component {

    render() {
        return(
            <Provider store={store}>
                <SignUpForm onSubmit={FormSubmit} />
            </Provider>
        )
    }
}

export default SignUpFormContainer
