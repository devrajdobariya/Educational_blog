import './Hblog.css';
import { Heading } from '../comman/heading';
import { Container, Row, Col, Image } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { blog } from '../images/dummydata';

export function Hblog() {
    return (
        <>
            <Container>
                <Row className='text-center mb-4'>
                    <Col>
                        <Heading subtitle="OUR BLOG" title="Recent From Blog"></Heading>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-around'>
                    {
                        blog.map((value) => {
                            return (
                                <>
                                    <Col md={3}>

                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img className='mb-2' variant="top" src={value.cover} />
                                            <Card.Body>
                                                <Card.Title className='mb-3'>{value.title}</Card.Title>
                                                <Card.Text>
                                                   {value.desc}
                                                </Card.Text>
                                                {/* <Button variant="primary">Go somewhere</Button> */}
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                </>
                            )
                        })
                    }
                </Row>
            </Container>

        </>
    )
}