import React from 'react';
import './Navbar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">SEER</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
                <NavDropdown title="Features" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/submit">Submit</NavDropdown.Item>
                    <NavDropdown.Item href="/moderate">Moderate</NavDropdown.Item>
                    <Nav.Link href="/analyst">Analyst</Nav.Link>
                </NavDropdown>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation);