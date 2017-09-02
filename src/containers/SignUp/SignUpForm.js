import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form';
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
} from 'semantic-ui-react'

import InputFormField from '../../components/InputFormField'
import DropdownFormField from '../../components/DropdownFormField'

const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
];

let SignUpForm = props => {
    const { handleSubmit, pristine, submitting } = props;
    return (
        <div className='login-form'>
            <style>{`
                  body > div,
                  body > div > div,
                  body > div > div > div.login-form {
                    height: 100%;
                  }
                `}</style>
            <Grid
                textAlign='center'
                style={{ height: '100%' }}
                verticalAlign='middle'
            >
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        {' '}Create new account
                    </Header>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group widths='equal'>
                            <Field
                                name="firstName"
                                component={ InputFormField}
                                label="First Name"
                            />
                            <Field
                                name="lastName"
                                component={ InputFormField}
                                label="Last Name"
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Field
                                name="email"
                                component={ InputFormField}
                                label="Email"
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Field
                                name="password"
                                component={ InputFormField}
                                label="Password"
                            />
                            <Field
                                name="repeat_password"
                                component={ InputFormField}
                                label="Repeat password"
                            />
                        </Form.Group>
                        <Field
                            name="gender"
                            label="Gender"
                            options={genderOptions}
                            component={DropdownFormField}
                        />
                        <Form.Checkbox label='I agree to the Terms and Conditions' />
                        <Button type='submit' disabled={pristine || submitting}>Submit</Button>
                    </Form>
                    <Message>
                        Already registered? <Link to='/login'>Log in</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        </div>
    );
};

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
SignUpForm = reduxForm({
    form: 'signUpForm', // a unique identifier for this form
})(SignUpForm);

// You have to connect() to any reducers that you wish to connect to yourself
SignUpForm = connect(
    state => ({
        initialValues: state.account.data, // pull initial values from account reducer
    }),
)(SignUpForm);

export default SignUpForm;
