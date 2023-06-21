import React from "react";
import './Htestominal.css';
import { Container, Row, Col } from "react-bootstrap";
import { Heading } from "../comman/heading";
import { testimonal } from "../images/dummydata";
import Image from "react-bootstrap/Image";

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
                                 <Col className="bg-light ms-2 ">
                        <Row className="">
                            <Col>
                            {/* <img fluid src={value.cover}></img> */}
                            <Image className="mb-2 mt-2" fluid src={value.cover} roundedCircle></Image>
                            </Col>
                            <Col className="mt-5"> 
                               <h5 className="heading ms-2 ">{value.name}</h5>
                                <p className="subheading ms-2">{value.post}</p>
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