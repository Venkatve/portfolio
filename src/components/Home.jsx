import React from "react";
import { AttentionSeeker } from "react-awesome-reveal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

const Home = ({ darkMode }) => {
  return (
    <div>
      <AttentionSeeker shakeX>
        <Row>
          <Col lg={12} xs={12}>
            <h1 className="display-3 hello" align="center">
              HELLO!<code> I'm Venkatraman</code>
            </h1>
            <h2 className="leads" align="center">
              I'm a  FULL STACK  Developer
            </h2>
          </Col>
        </Row>
      </AttentionSeeker>
      <Row>
        <Container align="center">
          <div style={{ height: "25vh" }}>
          </div>
        </Container>
      </Row>
      <br></br>
    </div>
  );
};

export default Home;
