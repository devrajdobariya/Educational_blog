import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { price } from "../images/dummydata";
import Card from 'react-bootstrap/Card';
import { Heading } from "../comman/heading";
import Button from 'react-bootstrap/Button';

export function Hprice() {
    return (
        <>
            <Container>
                <Row className="text-center mb-4">
                   <Heading subtitle="OUR PRICING" title="Pricing & Packages"></Heading>
                </Row>
                <Row className="d-flex justify-content-evenly">
                    {
                        price.map((value) => {
                            return (
                                <>
                                    <Col md={3}>
                                        <Card style={{ width:"100%" }}>
                                            <Card.Body>
                                                <Card.Title className="text-center">{value.name}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted text-center">
                                                    <h4>${value.price}</h4></Card.Subtitle>
                                                <Card.Text>
                                                   {value.desc}
                                                </Card.Text>
                                                <Button className=' btn-outline'>GET STARTED</Button>
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