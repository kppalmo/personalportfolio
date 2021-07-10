import React from 'react';
import styled from 'styled-components';
import { Container, Row, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

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

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_2na33qf', 'template_7vkoo9v', e.target, 'user_zDDNKotipzbFYBIfAKtC1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    
    <Form className="contact-form" onSubmit={sendEmail}>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Name address</Form.Label>
      <Form.Control type="text" placeholder="Enter email" name="user_name" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Password" name="user_email" />
    </Form.Group>

    <Form.Group controlId="formBasicEmail">
      <Form.Label>Message</Form.Label>
      <Form.Control type="text" placeholder="Password" name="message" />
    </Form.Group>
    <Button  variant="primary" type="submit" value="Send" onClick={event =>  window.location.href='/esent'}>
      Submit
    </Button>

    </Form>
  );
}