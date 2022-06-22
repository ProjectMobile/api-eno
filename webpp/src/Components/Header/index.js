import React from 'react'
import './styles.css';
import logo from '../../Assets/Img/logo.png'
import {
    Navbar,
    Container
} from 'react-bootstrap'

function Header() {
    return (

        <Navbar
            expand="xl"
            full
            dark
            className='header'
        >
            <Container fluid>
                <Navbar.Brand href="/Home">
                    <img
                        alt='logo'
                        width='150px'
                        src={logo}
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>

    )
}

export default Header