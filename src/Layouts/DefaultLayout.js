import React, { Component } from 'react';
import {
    Container,
} from 'semantic-ui-react'

import Header from '../components/Header'

class DefaultLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Container id="Main">
                    {this.props.children}
                </Container>
            </div>
        );
    }
}

export default DefaultLayout;
