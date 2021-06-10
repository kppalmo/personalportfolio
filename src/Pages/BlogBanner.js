import React from 'react';
import { Layout } from './Layout';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { BlogCard } from '../utils/BlogCard';


const Styles = styled.div`
.spacing{
    margin-top:2em;
}

.textSizing{
    fontSize:10px;
}

`

export const BlogBanner = props => (
    <Styles>
            <Layout>
                  <Row className="spacing">
                        <Col lg={true}>
                            <BlogCard 
                            Header="Making a design system from scratch"
                            Date="12 Feb 2020 | Design, Pattern"
                            text="Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Aliquam eum reiciendis sint! 
                            Officia fuga rem iure commodi dolore maiores nobis!"/>
                        </Col>
                        <Col lg={true}>
                            <BlogCard 
                            Header="Creating pixel perfect icons in Figma"
                            Date="12 Feb 2020 | Design, Pattern"
                            text="Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Aliquam eum reiciendis sint! 
                            Officia fuga rem iure commodi dolore maiores nobis!"/>
                        </Col>
                    </Row>
                </Layout>
    </Styles>
)