import React from "react";
import './head.css';
import { Button } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

export function Head() {
    return (
        <>
            <Container>

                <section className="head">
                    <div className="flexSB">
                        <div className="logo">
                            <h1>ACADEMIA</h1>
                            <span>ONLINE EDUCATION & LEARNING</span>
                        </div>
                        <div className="socil">
                            <BsFacebook className="icon"></BsFacebook>
                            <BsInstagram className="icon"></BsInstagram>
                            <BsTwitter className="icon"></BsTwitter>
                            <BsYoutube className="icon"></BsYoutube>
                        </div>
                    </div>
                </section>

                {/* ==========start navbar=========== */}

            </Container>
            <Navbar bg="transparent" expand="lg">
                <Container>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav " />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ">
                            <Nav.Link as={Link} to='/' className="ps-0 text-white">HOME</Nav.Link>

                            <NavDropdown title="ALL COURCES" id="basic-nav-dropdown" className="ps-5 text-white">
                                <NavDropdown.Item as={Link} to='/popular Cources'>POPULAR COURCES</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/Online Cources'>
                                    ONLINE COURCES
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>



                            <Nav.Link as={Link} to='/about' className="ps-5 text-white">ABOUT</Nav.Link>
                            <Nav.Link href="#link" className="ps-5 text-white">TEAM</Nav.Link>
                            <Nav.Link  className="ps-5 text-white"><Link to="/Pricing">PRICING</Link></Nav.Link>
                            <Nav.Link href="#link" className="ps-5 text-white"><Link to="/Blog">Blog</Link></Nav.Link>
                            <Nav.Link href="#link" className="ps-5 text-white">CONTACT</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                    <Button className="certifacate">GET CERTIFICATE</Button>

                </Container>
            </Navbar>
           

        </>
    )
}
