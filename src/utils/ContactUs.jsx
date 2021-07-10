import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';


const Styles = styled.div`
.contact-container{
  background-color:#A0C1D1;
  width:%;
  box-shadow:0px 0px 20px #000;
  margin-top:10vh;
}

.contact-submit{
  display:block;
  margin-left:auto;
  margin-right:auto;
  margin-top:1vh;
  margin-bottom:1vh;
}
.contact-blocks{
  display:block;
  margin-left:auto;
  margin-right:auto;
  margin-top:.5vh;
}
.contact-header{
  display:block;
  margin-left:auto;
  margin-right:auto;
  margin-bottom:1vh;
  margin-top:.5vh;
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
    <Styles>
    <Container fluid className="contact-container ">
      <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <input type="hidden" name="contact_number" />
          <Row>
          <h3 class="contact-header">Contact Me!</h3>
          </Row>
          <Row>
          <h5 class="contact-blocks">Name</h5>
          </Row>
          <Row>
          <input placeholder="Name" type="text" name="user_name" class="contact-blocks"/>
          </Row>
          <Row>
          <h5 class="contact-blocks">Email</h5>
          </Row>
          <Row>
          <input placeholder="Example@email.com" type="email" name="user_email" class="contact-blocks"/>
          </Row>
          <Row>  
          <h5 class="contact-blocks">Message</h5>  
          </Row>
          <Row>
          <textarea placeholder="Message" name="message" class="contact-blocks"/>     
          </Row>
          <Row>
          <input type="submit" value="Send" class="contact-submit" />
          </Row>  
    </form>
    </Container>
    </Styles>
  );
}

