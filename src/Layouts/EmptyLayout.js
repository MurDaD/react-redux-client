import React, { Component } from 'react';
import {
    Container,
} from 'semantic-ui-react'

class EmptyLayout extends Component {
    render() {
        return (
            <div>
                <Container id="Main">
                    {this.props.children}
                </Container>
            </div>
        );
    }
}

export default EmptyLayout;
