import React from 'react';
import { Container } from 'react-bootstrap';
import  Navigation  from '../utils/Navigation';

export const Layout = props => (
    <>
    
    <Navigation/>

    <Container>
            {props.children}
    </Container>

    </>
)