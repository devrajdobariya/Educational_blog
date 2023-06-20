import React from "react";
import { Head } from "../comman/head";
import { Container, Row, Col, Button } from "react-bootstrap";
import './about.css';
import { Habout } from "../Home page/Habout";
import { Footer } from "../comman/footer";

export function About(){
    return(
        <>
        <Container fluid>
        <div className="hero">
        
          <Head></Head>
          
          {/* ======above class hero for bg img====== */}
          <Row className="heading">
                    <Col style={{marginTop:"80px"}}><h5>WELCOME TO ACADEMIA</h5></Col>
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

        <Habout></Habout>
        <Footer></Footer>
        </>
    )
}