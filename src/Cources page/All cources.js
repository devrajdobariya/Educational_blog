import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
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
                <div className="hero">

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

                                    <Card className='mb-4' style={{ width: '18rem ', height: "400" }}>
                                        {/* <Col> */}
                                        <Card.Img variant="top" src={value.cover} />
                                        {/* </Col> */}
                                        <Col>
                                            <Card.Body>
                                                <Card.Title className='title'>{value.coursesName}</Card.Title>
                                                <p ><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
                                                <Card.Text>
                                                    {value.courTeacher.map((details) => (
                                                        <>
                                                            <div className='box'>
                                                                <div className='dimg'>
                                                                    <img src={details.dcover} alt='' />
                                                                </div>
                                                                <div className='para name'>
                                                                    <h4>{details.name}</h4>
                                                                </div>
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
                                                <Button className=' btnenrol'>ENROLL NOW !</Button>

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