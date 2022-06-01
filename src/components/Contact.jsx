import { React } from "react";
import { Fade } from "react-awesome-reveal";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";

const Contact = ({ darkMode }) => {
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <br></br>
      <Fade>
        <Container>
          <Row>
            <Col lg={4}>
              <br></br>
              <h2 className="lead">Contact me!</h2>
              <p className="contact-text">
                Contact for a suggestion, feedback, opportunities or we can
                colaborate on a project.
              </p>
              <br></br>
              <br></br>
            </Col>
            <br></br>
            <p className="leads2">
              <b style={{color:"orange"}}><span style={{color:"red"}}>Email ID </span>: venkat.ve.9@gmail.com</b>
            </p>
            <p className="leads2">
              <b style={{color:"orange"}}><span style={{color:"red"}}>Mobile Number</span> : 86676-05083</b>
            </p>
            <p className="leads2">
              <b style={{color:"orange"}}>Pudukkottai, Tamilnadu</b>
            </p>
          </Row>
        </Container>
      </Fade>
    </div>
  );
};

export default Contact;
