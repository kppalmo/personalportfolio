import React from 'react';
import styled from 'styled-components';
import {Row, Col, Image } from 'react-bootstrap';
import { Layout } from './Layout';
import profilePic from '../img/profilePic.jpg';


const Styles = styled.div`

.spacing{
    margin-top:15px;
}
.IMGSizing{
    width:45%;
    display:block;
    margin-left:auto;
    margin-right:auto;
    border:solid;
    border-color:tan;
}

`

export const AboutSection = props => (
    <Styles>
        <Layout>
            <Row style={{marginTop:"5em",marginBottom:"5em"}}>
                <Col lg={true}>
                    <h1>Hi, I'm Keegan,</h1>
                    <h1>Front-End Developer</h1>
                    <p class="spacing">
                        Amet minim mollit non deserunt ullamco 
                        est sit aliqua dolor do amet sint. Velit 
                        officia consequat duis enim velit mollit. 
                        Exercitation veniam consequat sunt 
                        nostrud amet.
                    </p>
                    <button style={{marginTop:"1em"}}>
                        LearnMore!
                    </button>
                </Col>
                <Col lg={true}>
                    <Image src={profilePic} alt="profileIMG" className="IMGSizing" roundedCircle />
                </Col>
            </Row>
        </Layout>
    </Styles>

)