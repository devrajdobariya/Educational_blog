import { Container, Row, Col } from "react-bootstrap"
import './footer.css';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
// import {Card,CardImage} from 'react-bootstrap/Card';
import { SiWindowsterminal } from "react-icons/si";
import { MdAddCall } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";

export function Footer() {
    return (
        <>
            <Container className="mt-5">
                <Row >
                    <Col>
                        <h1>ACADEMIA</h1>
                        <span className="subheading">ONLINE EDUCATION & LEARNING</span>
                        <p className="mt-2">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <div className="socil">
                            <BsFacebook className="icon"></BsFacebook>
                            <BsInstagram className="icon"></BsInstagram>
                            <BsTwitter className="icon"></BsTwitter>
                            <BsYoutube className="icon"></BsYoutube>
                        </div>
                    </Col>
                    <Col className="link">
                        <h4 className="text-center mb-3">Explore</h4>
                        <ul>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Cources</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                    </Col>
                    <Col className="link">
                        <h4 className="text-center mb-3">Quick Links</h4>
                        <ul>
                            <li>Contact us</li>
                            <li>Pricing</li>
                            <li>Term&Condition</li>
                            <li>Privacy</li>
                            <li>Feedbacks</li>
                        </ul>
                    </Col>
                    {/* <Col>
                        <Card className="mb-3" style={{ maxWidth: '540px' }}>
                            <Row className="g-0">
                                <Col md={4}>
                                    <CardImage src="/images/react400.jpg" />
                                </Col>
                                <Col md={8}>
                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardText>
                                            This is a wider card with supporting text below as a natural lead-in to additional
                                            content. This content is a little bit longer.
                                        </CardText>
                                        <CardText>
                                            <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                                        </CardText>
                                    </CardBody>
                                </Col>
                            </Row>
                        </Card>

                    </Col> */}

                    <Col>

                        <h4 className="mb-2">
                            Have A Question ?
                        </h4>
                        <Row className="mb-2">
                            <Col md={4} className="icon me-2 "><SiWindowsterminal></SiWindowsterminal></Col>
                            <Col className="mt-2"> <h6>203 Fake St. Mountain View, San Francisco, California, USA</h6></Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md={4} className="icon me-2"><MdAddCall></MdAddCall></Col>
                            <Col className="mt-2"> <h6>+2 392 3929 210</h6></Col>
                        </Row>
                        <Row className="mb-2">
                            <Col  md={4} className="icon me-2"><SiMinutemailer></SiMinutemailer>  </Col>
                            <Col className="mt-2"> <h6>info@yourdomain.com</h6></Col>

                        </Row>
                    </Col>
                </Row>
                
            </Container>
            <Container fluid>
            <Row className="text-center mt-5 bg">
                    <Col className="mt-3"><p>Copyright ©2022 All rights reserved | This template is made with  by GorkhCoder</p></Col>
                </Row>
            </Container>

        </>
    )
}