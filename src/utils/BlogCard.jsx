import React from 'react';
import styled from 'styled-components';
import { Card, Container } from 'react-bootstrap';

const Styles = styled.div`
.cardStlye{
    color:red;
}
.headerSpacing{
    margin-top:.5em;
    margin-left:1vh;
}
.bodySpace{
    margin-left:1vh;
    margin-right:1em;

}
.txtColor{
    color:#A0C1D1;
}

`

export const BlogCard = props => (
    <Styles>
        <Container>
            <Card>
            <h1 class="headerSpacing">{props.Header}</h1>
            <h6 class="bodySpace txtColor">{props.Date}</h6>
            <p class="bodySpace">
                {props.text}
            </p>

            </Card>
        </Container>
    </Styles>
)