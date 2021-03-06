import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';
import { BlogCard } from '../utils/BlogCard';


const Styles = styled.div`
.spacing{
    margin-top:2em
}

.jumob{
    background-color:#A0C1D1;
    box-shadow:0px 0px 20px #000;
    height:50vh;

}

.textSizing{
    fontSize:10px;
}

`

export const BlogBanner = props => (
    <Styles>
        <Jumbotron className="jumob spacing">
            <Container>
                <h5>Recent Posts</h5>
                  <Row className="spacing">
                        <Col lg={true} >
                            <BlogCard 
                            Header="Making a design system from scratch"
                            Date="23 June 2021 | Update"
                            Text="Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Aliquam eum reiciendis sint! 
                            Officia fuga rem iure commodi dolore maiores nobis!"/>
                        </Col>
                        <Col lg={true}>
                            <BlogCard 
                            Header="Creating pixel perfect icons in Figma"
                            Date="12 Feb 2020 | Design, Pattern"
                            Text="Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Aliquam eum reiciendis sint! 
                            Officia fuga rem iure commodi dolore maiores nobis!"/>
                        </Col>
                    </Row>
                </Container>
                </Jumbotron>

    </Styles>
)