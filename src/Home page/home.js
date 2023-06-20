import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";


import './home.css'

import { Habout } from "./Habout";
import { Head } from "../comman/head";
import { Hcources } from "./Hcources";
import { Htestomonial } from "./Htestomonial";
import { Hblog } from "./Hblog";
import { Hprice } from "./Hprice";
import { Footer } from "../comman/footer";
export function Home() {
  return (
    <>

      {/* <Head></Head> */}
      {/* <Container>
                <div className="hero">
                    {/* <img src={img1}></img> */}
      {/* </div> */}
      {/* </Container> */}
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

      {/* ========start about section============= */}
      {/* <Container>
            <Row>
                <Col md={5}>hello</Col>
                <Col md={5}>description</Col>
                
            </Row>
            </Container> */}


    <Habout></Habout>
      {/* ========end about section============= */}
      {/* ========start cources section========= */}
      <Hcources></Hcources>
      {/* ========end cources section========= */}
{/* ==========start testomonial======== */}
<Htestomonial></Htestomonial>
{/* ==========end testomonial======== */}
{/* ==========satrt blog======== */}

<Hblog></Hblog>
{/* ==========end blog======== */}
{/* ========start price========= */}
<Hprice></Hprice>
{/* ==========end price========== */}
{/* ========start footer========= */}
<Footer></Footer>
{/* ========end footer========= */}

    </>
  )
}