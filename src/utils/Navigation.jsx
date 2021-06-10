import React from 'react';
import { Nav, Navbar,Image} from 'react-bootstrap';
import styled from 'styled-components';
import homeLogo from '../img/homeLogo.png';
const Styles = styled.div`
 
    .navbar-custom {
        background-color:;
        color:white;
        
    }
    .homeLogo{
        width:5%;
        margin-left:.5em;
    }
  
`

export const Navigation = props => {
    return(
        <Styles>
            <Navbar className="navbar-custom  " variant="light" expand="lg">
                <Navbar.Brand href="/" className="txtColor"><Image src={homeLogo} className="homeLogo"/></Navbar.Brand>
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
    
