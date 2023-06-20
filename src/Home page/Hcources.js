import './Hcources.css'
import { Heading } from '../comman/heading'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// import Image from 'react-bootstrap'
import { coursesCard,online } from '../images/dummydata'
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
export function Hcources() {
    return (
        <>
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
{/* <Link className='btn btn-sucess' to= */}
                                            </Card.Body>
                                        </Col>
                                    </Card>
                                </>
                            )
                        })
                    }
                </Row>
                <Row className='text-center mb-4'>
                    <Heading subtitle="COURSES" title="Browse Our Online Courses"></Heading>
                </Row>
                <Row>
                    {
                        online.map((value) => {
                            return (
                                <>

                                    <Col md={2} className='border'>
                                        <Image src={value.cover } ></Image>
                                        <h5 className='course'>{value.courseName}</h5>
                                        <h6 className='coursenumber'>{value.course}</h6>
                                    </Col>
                                </>
                            )
                        })
                    }
                </Row>
            </Container >


        </>
    )
}