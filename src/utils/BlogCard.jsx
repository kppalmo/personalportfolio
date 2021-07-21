import React from "react";
import styled from "styled-components";
import { Card, Container } from "react-bootstrap";

const Styles = styled.div`
  .cardStlye {
    border-radius: 24px;
    background: #e0e0e0;
    box-shadow: 28px 28px 56px #bebebe;
  }
  .headerSpacing {
    margin-top: 0.5em;
    margin-left: 1vh;
  }
  .bodySpace {
    margin-left: 1vh;
    margin-right: 1em;
  }
  .txtColor {
    color: #a0c1d1;
  }
`;

export const BlogCard = (props) => (
  <Styles>
    <Container>
      <Card className="cardStlye">
        <h1 class="headerSpacing">{props.Header}</h1>
        <h6 class="bodySpace txtColor">{props.Date}</h6>
        <p class="bodySpace">{props.Text}</p>
      </Card>
    </Container>
  </Styles>
);
