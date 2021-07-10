import React from 'react';
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';


const Styles = styled.div`
.contact-container{
  background-color:#A0C1D1;
  width:100%;
  height:50vh;
  box-shadow:0px 0px 20px #000;
  margin-top:10vh;
}

`

export default function ContactUs() {

  return (
    <Styles>
    <Container fluid className="contact-container ">
     

    </Container>
    </Styles>
  );
}

