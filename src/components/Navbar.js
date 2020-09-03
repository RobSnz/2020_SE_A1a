import React from 'react';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
    console.log(props);
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">SEER</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {/*<Nav.Link href="/"></Nav.Link>*/}
                    {/*<Nav.Link href="/About">About</Nav.Link>*/}
                    {/*<Nav.Link href="/Contact">Contact</Nav.Link>*/}
                    <Nav.Link href="/Login">Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation);