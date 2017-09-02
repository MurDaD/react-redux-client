import React, { Component } from 'react';
import {
    Header,
    Icon,
} from 'semantic-ui-react'
import DefaultLayout from '../Layouts/DefaultLayout'

class Home extends Component {
    render() {
        return (
            <DefaultLayout>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='users' circular />
                    <Header.Content>
                        Friends
                    </Header.Content>
                </Header>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi et ipsum ac mauris pellentesque feugiat sed a mauris.
                    Proin viverra tristique tempor. Fusce gravida bibendum neque nec cursus. Etiam luctus.
                </p>
            </DefaultLayout>
        );
    }
}

export default Home;
