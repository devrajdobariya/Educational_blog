import './Hcources.css'
import { Heading } from '../comman/heading'
import { Container, Row, Col, Image ,Button} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// import Image from 'react-bootstrap'
import { coursesCard } from '../images/dummydata'
import { AiFillStar } from "react-icons/ai";
export function Hcources() {
    return (
        <>
            <Container>
                <Row className='text-center'>
                    <Heading subtitle="OUR COURCES" title="Explore Our Popular Online Courses"></Heading>
                </Row>
                <Row className='d-flex justify-content-around'>
                    {
                coursesCard.map((value)=>{
                    return(
                        <>
                        
                        <Card className='mb-4' style={{ width: '18rem ' ,height:"400" }}>
                        {/* <Col> */}
                        <Card.Img variant="top" src={value.cover} />
                        {/* </Col> */}
                        <Col>
                        <Card.Body>
                            <Card.Title>{value.coursesName}</Card.Title>
                            <p><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>
                            <Card.Text>
                            {value.courTeacher.map((details) => (
                                                <>
                                                    <div className='box'>
                                                        <div className='dimg'>
                                                            <img src={details.dcover} alt='' />
                                                        </div>
                                                        <div className='para'>
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
                    {/* {coursesCard.map((val) => (
                    <Col md={3} className=''> */}

                    {/* <div className='items'>
                                <div className='content flex'>
                                    <div className='left'>
                                        <div className='img'>
                                            <img src={val.cover} alt='' />
                                        </div>
                                    </div>
                                    <div className='text'>
                                        <h1>{val.coursesName}</h1>
                                        <div className='rate'>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <label htmlFor=''>(5.0)</label>
                                        </div>
                                        <div className='details'>
                                            {val.courTeacher.map((details) => (
                                                <>
                                                    <div className='box'>
                                                        <div className='dimg'>
                                                            <img src={details.dcover} alt='' />
                                                        </div>
                                                        <div className='para'>
                                                            <h4>{details.name}</h4>
                                                        </div>
                                                    </div>
                                                    <span>{details.totalTime}</span>
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className='price'>
                                    <h3>
                                        {val.priceAll} / {val.pricePer}
                                    </h3>
                                </div>
                                <button className='outline-btn'>ENROLL NOW !</button>
                            </div>
                </Col>

                        ))} */}
                </Row>
            </Container >


        </>
    )
}