import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
 
    .navbar-custom {
        background-color:;
        color:white;
        
    }
   
  
`

function Navigation () {
    return(
        <Styles>
            <Navbar className="navbar-custom  " variant="light" expand="lg">
                <Navbar.Brand href="/" className="txtColor">Keegan Palmo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ml-auto   ">
                    <Nav.Item><Nav.Link href="/" >Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}


export default Navigation;
    
