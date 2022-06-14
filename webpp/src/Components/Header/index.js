import React from 'react'
import './styles.css';
import logo from '../../Assets/Img/logo.png'
import {
    Navbar,
    Button,
    Container
} from 'react-bootstrap'

function Header() {
    return (
        // <div>
        //     <Navbar
        //         expand="xl"
        //         full
        //         dark
        //         className='header'
        //     >
        // //         <NavbarBrand href="/Home">

        // //         </NavbarBrand>
        // //         <NavbarToggler onClick={function noRefCheck() { }} />
        // //     </Navbar>
        // </div>

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

                <Button variant="light" href='/NewEvent'>Novo Evento</Button>
            </Container>
        </Navbar>

    )
}

export default Header