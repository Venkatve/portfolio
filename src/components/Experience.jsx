import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import rental from "../media/rental.png";
import news from "../media/news.png";
import delivery from "../media/delivery.png";
import ecommerce from "../media/ecommerce.png";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";

const Experience = ({ darkMode }) => {
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <br></br>
      <Fade>
        <Container>
        <h2 className="lead" align="center">
            <b>- Projects -</b>
          </h2>
          <br></br>
          <div className="credentials">
        <p className="demoCred" style={{ color: "tomato", fontWeight: "bold" }}>CREDENTIALS</p>
       <p className="demoCred"><span style={{ color: "red" }}>UserID:</span><span style={{ color: "orange" }}>  user4321demo@gmail.com</span> </p>
        
        <p className="demoCred"> <span style={{ color: "red" }}>Password :</span> <span style={{ color: "orange" }}> !12345</span></p>
          </div>
          <br></br>
  
          <div className="main_con">
            <Zoom>
              <Row>
                <div className="last">

                  <Col lg={4} sm={12} md={12}>
                    <Card
                      align="center"
                      className="Fi"
                      data-theme={darkMode ? "dark" : "light"}
                    >
                      <br></br>
                      <center>
                        <div className="flip-card">
                          {/* <div class="flip-card-inner"> */}
                          <div className="flip-card-front">
                            <Card.Img
                              className="image"
                              variant="top"
                              src={ecommerce}
                            />
                            <Card.Body>
                              <Card.Title align="center">
                                FILA E-Commerce 
                              </Card.Title>
                              <Card.Text>
                                <p align="center">
                                  An E-Shopping application: Featuring,user registration,
                                  user login,product filter based on color size and prize. Add to cart,checkout the items
                                  and payment process.
                                </p>
                              </Card.Text>
                            </Card.Body>
                          </div>
                        </div>
                      </center>
                      <br></br>

                      <div>
                        <a
                          href="https://fila-ecommerce-website.netlify.app"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Button
                            variant={
                              darkMode ? "outline-light" : "outline-dark"
                            }
                            className="sbtn view"
                          >
                            Live-Demo
                          </Button>
                        </a>
                        <div>
                          <a
                            href="https://github.com/Venkatve/ecommerce-client"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn view"
                            >
                              Front-End
                            </Button>
                          </a>
                          <a
                            href="https://github.com/Venkatve/ecommerce-server"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn"
                            >
                              Back-End
                            </Button>
                          </a>
                        </div>
                      </div>
                      <br></br>
                    </Card>
                  </Col>

                  <Col lg={4} sm={12} md={12}>
                    <Card
                      align="center"
                      className="Fi"
                      data-theme={darkMode ? "dark" : "light"}
                    >
                      <br></br>
                      <center>
                        <div className="flip-card">
                          <div className="flip-card-front">
                            <Card.Img
                              className="image"
                              variant="top"
                              src={rental}
                            />
                            <Card.Body>
                              <Card.Title align="center">
                                Morden Car Rental

                              </Card.Title>
                              <Card.Text>
                                <p align="center">
                                  client just have to insert his trip's start and end date as well 
                                  as the pickup time and location and select car from the available 
                                  cars and pay accordingly and
                                  its easy to use.
                                </p>
                              </Card.Text>
                            </Card.Body>
                          </div>
                        </div>
                      </center>
                      <br></br>

                      <div>
                        <a
                          href="https://modern-rental-cars.herokuapp.com/login"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                         <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn"
                            >
                              Live-Demo
                            </Button>
                        </a>
                        <div>
                          <a
                            href="https://github.com/Venkatve/modern-cars-client"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn view"
                            >
                              Front-End
                            </Button>
                          </a>
                          <a
                            href="https://github.com/Venkatve/modern-cars-server"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn"
                            >
                              Back-End
                            </Button>
                          </a>
                        </div>
                      </div>
                      <br></br>
                    </Card>
                  </Col>

                  <Col lg={4} sm={12} md={12}>
                    <Card
                      align="center"
                      className="Fi"
                      data-theme={darkMode ? "dark" : "light"}
                    >
                      <br></br>
                      <center>
                        <div class="flip-card">
                          {/* <div class="flip-card-inner"> */}
                          <div className="flip-card-front">
                            <Card.Img
                              className="image"
                              variant="top"
                              src={news}
                            />
                            <Card.Body>
                              <Card.Title align="center">
                                NEWS Hunt
                              </Card.Title>
                              <Card.Text>
                                <p align="center">
                                NEWS hunt is to develop an application self uploading the news and which will 
                                display news articles and uploaded news feeds, 
                                verified and approved at backend . 
                            
                                </p>
                              </Card.Text>
                            </Card.Body>
                          </div>
                        </div>
                      </center>
                      <br></br>
                      <div>
                        <a
                          href="https://newshunt-frontend.herokuapp.com"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Button
                            variant={
                              darkMode ? "outline-light" : "outline-dark"
                            }
                            className="sbtn"
                          >
                            Live-Demo
                          </Button>
                        </a>
                        <div>
                          <a
                            href="https://github.com/Venkatve/newshunt--client"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn view"
                            >
                              Front-End
                            </Button>
                          </a>
                          <a
                            href="https://github.com/Venkatve/newshunt--server"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn"
                            >
                              Back-End
                            </Button>
                          </a>
                        </div>
                      </div>
                      <br></br>
                    </Card>
                  </Col>
                </div>
              </Row>
            </Zoom>
            <br></br>

            <Zoom>
              <Row>
                <div className="last">
                  <Col lg={4} sm={12}>
                    <Card
                      align="center"
                      className="Fi"
                      data-theme={darkMode ? "dark" : "light"}
                    >
                      <br></br>
                      <center>
                        <div className="flip-card">
                          {/* <div class="flip-card-inner"> */}
                          <div className="flip-card-front">
                            <Card.Img
                              className="image"
                              variant="top"
                              src={delivery}
                            />
                            <Card.Body>
                              <Card.Title align="center">
                                Pro Delivery
                              </Card.Title>
                              <Card.Text>
                                <p align="center">
                                add or remove ingredients. Online payment,
                                safe and secure to pay for food and delivery online orders. 
                                access a area of restaurants in the customer city
                                </p>
                              </Card.Text>
                            </Card.Body>
                          </div>
                        </div>
                      </center>
                      <br></br>

                      <div>
                        <a
                          href="https://proj-delivery.herokuapp.com/my-account"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Button
                            variant={
                              darkMode ? "outline-light" : "outline-dark"
                              
                            }
                            className="sbtn view"
                          >
                            Live-Demo
                          </Button>
                        </a>
                        <div>
                          <a
                            href="https://github.com/Venkatve/delivery-client"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn view"
                            >
                              Front-End
                            </Button>
                          </a>
                          <a
                            href="https://github.com/Venkatve/delivery-server"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn"
                            >
                              Back-End
                            </Button>
                          </a>
                        </div>
                      </div>
                      <br></br>
                    </Card>
                  </Col>

             

                </div>
              </Row>
            </Zoom>
          </div>
        </Container>
      </Fade>
      <br></br>
      <br></br>
    </div>
  );
};

export default Experience;
