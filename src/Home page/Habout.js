import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";


import Img1 from '../images/about.webp'
// import { homeAbout,awrapper } from "./dummydata";
import { homeAbout, awrapper } from "../images/dummydata";
import { Heading } from "../comman/heading";
import './Habout.css';

export function Habout() {

    return (
        <>
            {/* ========start about section============= */}
            <Container fluid>
                <Row className="d-flex justify-content-evenly">
                    <Col md={7} sm={10} className="" >
                        <Image fluid className="mt-5 aboutimg" src={Img1} rounded />
                    </Col>
                    <Col md={5} sm={10} className="">

                        {/* <Heading subtitle="LEARN ANYTHING" title="Benefits About Online Learning Expertise"></Heading> */}
                        <Heading className="responsive" subtitle="LEARN ANYTHING" title="Benefits About Online Learning Expertise"></Heading>
                        {
                            homeAbout.map((value) => {
                                return (
                                    <>
                                        <div className="card mb-3 mt-4" style={{ maxWidth: "540px" }}>
                                           
                                                <div className="row no-gutters">
                                                <div className="col-md-4">
                                                
                                                    <img src={value.cover} class="card-img" alt="..."></img>
                                                    </div>
                                                
                                                    <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title title">{value.title}</h5>
                                                        <p className="card-text desc">{value.desc}.</p>
                                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                    </div>
                                                    </div>
                                                
                                                </div>
                                            
                                        </div>
                                    </>
                                )
                            })
                        }
                    </Col>
                </Row>
            </Container>
            {/* ========end about section============= */}
            {/* ==========start awarpper section====== */}
            <Container fluid className="mt-5">
                <Row className="awrapper d-flex justify-content-ar text-white">
                    {
                        awrapper.map((val) => {
                            return (
                                <>

                                    <Col md={3} className="mt-2">
                                        <Image fluid src={val.cover}></Image>
                                        <Col><h1>{val.data}</h1></Col>
                                        <Col>{val.title}</Col>
                                    </Col>

                                </>
                            )
                        })
                    }
                </Row>
            </Container>


            {/* ==========end awarpper section====== */}
        </>
    )
}