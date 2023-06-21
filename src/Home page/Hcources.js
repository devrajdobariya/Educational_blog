import './Hcources.css'
import { Heading } from '../comman/heading'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// import Image from 'react-bootstrap'
import { coursesCard, online } from '../images/dummydata'
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
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
                <Row className='text-center mb-4'>
                    <Heading subtitle="COURSES" title="Browse Our Online Courses"></Heading>
                </Row>
                <Row className=''>
                    {
                        online.map((value) => {
                            return (
                                <>

                                    <Col md={2} className='border text-center bg-light '>
                                        <Image fluid className='onlineimg mt-2' src={value.cover} ></Image>
                                        <h5 className='course mt-2'>{value.courseName}</h5>
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