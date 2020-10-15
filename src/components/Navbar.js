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
                <Nav.Link href="/login" style={{ float: "right", color: "white", fontSize:"25px"}}>Login</Nav.Link>
                <NavDropdown title="Features" id="basic-nav-dropdown" style={{ paddingRight:"20px", float: "right", color: "lightgray", fontSize:"25px"}}>
                    <NavDropdown.Item href="/submit">Submit</NavDropdown.Item>
                    <NavDropdown.Item href="/moderate">Moderate</NavDropdown.Item>
                    <NavDropdown.Item href="/analyst">Analyst</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation);