import React from 'react'
import { Link } from 'react-router-dom'
import {
    Button,
    Container,
    Menu,
} from 'semantic-ui-react'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <Menu fixed='top' size='large'>
        <Container>
            <Menu.Item as={Link} to='/'>Home</Menu.Item>
            <Menu.Item as={Link} to='/posts'>Posts</Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item className='item'>
                    <Button as={Link} to='/login'>Log in</Button>
                </Menu.Item>
                <Menu.Item>
                    <Button as={Link} to='/signup' primary>Sign Up</Button>
                </Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>
);

export default Header
