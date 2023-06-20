import React from "react";
import './Htestominal.css';
import { Container, Row, Col, Image } from "react-bootstrap";
import { Heading } from "../comman/heading";
import { testimonal } from "../images/dummydata";

export function Htestomonial() {
    return (
        <>
            <Container>
                <Row className="text-center mb-4">
                    <Heading subtitle="TESTIMONIAL" title="Our Successful Students"></Heading>
                </Row>
                <Row>
                    {/* <Col>
                        <Row className="">
                            <Col><img src=""></img>
                            </Col>
                            <Col> 
                               <h4 className="heading">ROGER SCOTT</h4>
                                <h5 className="subheading">MARKETING MANAGER</h5>
                            </Col>
                        </Row>
                        <Row>
                            <h6 className="desc">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h6>
                        </Row>
                    </Col> */}
                    {
                        testimonal.map((value)=>{
                            return(
                                <>
                                 <Col>
                        <Row className="">
                            <Col><img src={value.cover}></img>
                            </Col>
                            <Col> 
                               <h4 className="heading">{value.name}</h4>
                                <h6 className="subheading">{value.post}</h6>
                            </Col>
                        </Row>
                        <Row>
                            <h6 className="desc">{value.desc}</h6>
                        </Row>
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