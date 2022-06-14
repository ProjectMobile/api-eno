import React from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import './styles.css';
import logo from '../../Assets/Img/logo.png'

function Header() {
    return (
        <div>
            <Navbar
                expand="xl"
                full
                dark
                className='header'
            >
                <NavbarBrand href="/Home">
                    <img
                        alt='logo'
                        width='150px'
                        src={logo}
                    />
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
            </Navbar>
        </div>
    )
}

export default Header