import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

import { Head } from "../comman/head";
import { Heading } from "../comman/heading";
import { Hprice } from "../Home page/Hprice";
import { Footer } from "../comman/footer";
import { Hcources } from "../Home page/Hcources";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// import Image from 'react-bootstrap'
import { coursesCard, online } from '../images/dummydata'
import { AiFillStar } from "react-icons/ai";
import './cources.css';


export function Popularcource() {
    return (
        <>
            <Container fluid>
                <div className="chero">

                    <Head></Head>

                    {/* ======above class hero for bg img====== */}
                    <Row className="heading">
                        <Col style={{ marginTop: "80px" }}><h5>WELCOME TO ACADEMIA</h5></Col>
                    </Row>
                    <Row className="heading">
                        <Col><h1>Best Online Education <br></br>Expertise</h1></Col>
                    </Row>
                    {/* <Heading subtitle="WELCOME TO ACADEMIA" title="Best Online Education <br></br>Expertise" ></Heading> */}
                    <Row className="heading">
                        <Col><p>Far far away,behind the word mountain, far from the countries<br></br> Vokalia and Consonatia ,there live the Blind texts.</p></Col>
                    </Row>
                    <Row className="heading">
                        <Col><Button style={{ backgroundColor: "#03877c" }}>GET STARTED NOW</Button>

                            <Button style={{ color: "#03877c" }} className="ms-5 bg-white">VIEW COURCES</Button></Col>
                    </Row>
                </div>
            </Container>
            <Container>
                <Row className='text-center mb-4'>
                    <Heading subtitle="OUR COURCES" title="Explore Our Popular Online Courses"></Heading>
                </Row>
                <Row className='d-flex justify-content-around'>
                    {
                        coursesCard.map((value) => {
                            return (
                                <>

                                    <Card className='mb-4 bgcolor' style={{ width: '18rem ', height: "400" }}>
                                        <Col>
                                        
                                            <Card.Img fluid className='courceimg text-center mt-2' variant="top" src={value.cover} roundedCircle />
                                        </Col>
                                        <Col>
                                            <Card.Body>
                                                <Card.Title className='title'>{value.coursesName}</Card.Title>
                                                <p ><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
                                                <Card.Text>
                                                    {value.courTeacher.map((details) => (
                                                        <>
                                                            <div className='box'>
                                                                <Row>
                                                                    <Col md={6}>
                                                                        <div>
                                                                            {/* <Image fluid src={details.dcover} alt='' /> */}
                                                                            <Image className='dimg' src={details.dcover} roundedCircle />
                                                                        </div>
                                                                    </Col>
                                                                    <Col md={6}>
                                                                        <div className='para name'>
                                                                            <p>{details.name}</p>
                                                                        </div>
                                                                    </Col>
                                                                </Row>

                                                            </div>
                                                            <span>{details.totalTime}</span>
                                                        </>
                                                    ))}
                                                </Card.Text>
                                            </Card.Body>
                                            <ListGroup className="list-group-flush">
                                                <ListGroup.Item> {value.priceAll}</ListGroup.Item>
                                                <ListGroup.Item>{value.pricePer}</ListGroup.Item>

                                            </ListGroup>
                                            <Card.Body>
                                                {/* <Button className=' btnenrol'>ENROLL NOW !</Button> */}
                                                <Button variant="outline-light">ENROLL NOW !</Button>
                                                {/* <Link className='btn btn-sucess' to= */}
                                            </Card.Body>
                                        </Col>
                                    </Card>
                                </>
                            )
                        })
                    }
                </Row>
            </Container>
            {/* <Hcources></Hcources> */}

            <Footer></Footer>
        </>
    )
}