import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { Layout } from '../Pages/Layout';

const Styles = styled.div`
.cardStlye{
    color:red;
}
.headerSpacing{
    margin-top:.5em;
    margin-left:.5em;
    maring-right:.5em;
}
.bodySpace{
    margin-left:1em;
    maring-right:1em;

}
.txtColor{
    color:#A0C1D1;
}

`

export const BlogCard = props => (
    <Styles>
        <Layout>
            <Card>
            <h1 class="headerSpacing">{props.Header}</h1>
            <h6 class="bodySpace txtColor">{props.Date}</h6>
            <p class="bodySpace">
                {props.text}
            </p>

            </Card>
        </Layout>
    </Styles>
)