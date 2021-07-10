import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';
import thanks from '../img/Thanks.png';
import styled from 'styled-components';


const Styles = styled.div`
.thanks-container{
    background-color:#A0C1D1;
    box-shadow:0px 0px 20px #000;
    margin-top:10vh;
}
.thanks-header{
    display:block;
    margin-left:auto;
    margin-right:auto;
    margin-top:5vh;
}
.thanks-img{
    display:block;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:5vh;
}
`

export const ESent = props => (
    <Styles>
        <Container className="thanks-container">
            <Row>
                <h1 class="thanks-header">Thanks for Reaching Out!</h1>
            </Row>
            <Row>
                <Image src={thanks} className="thanks-img"/>
            </Row>
        </Container>        
    </Styles>
)
export default ESent;