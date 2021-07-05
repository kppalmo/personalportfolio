import React from 'react';
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';
import { BlogCard } from '../utils/BlogCard';

const Styles = styled.div`
.headerText{
    margin-top:2em;
    margin-bottom:.5em;
}
.cardSpacing{
    margin-bottom:1em;
}

`

export const FeaturedWork = props =>(
    <Styles>
        <Container>
            <h3 class="headerText">Featured Work</h3>
            <Row className="cardSpacing">
                <BlogCard
                Header="Test"
                Date="Oct"
                text='Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Aliquam eum reiciendis sint! 
                Officia fuga rem iure commodi dolore maiores nobis!'
                />
            </Row>
            <Row className="cardSpacing">
                <BlogCard
                Header="Designing Dashboards"
                Date="Oct"
                text='Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Aliquam eum reiciendis sint! 
                Officia fuga rem iure commodi dolore maiores nobis!'
                />
            </Row>
           <Row className="cardSpacing">
            <BlogCard
                Header="Vibrant Portraits of 2020"
                Date="Oct"
                text='Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Aliquam eum reiciendis sint! 
                Officia fuga rem iure commodi dolore maiores nobis!'
                />


           </Row>
           
            

        </Container>
    </Styles>
)