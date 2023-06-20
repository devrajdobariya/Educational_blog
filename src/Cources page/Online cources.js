import '../Home page/Hcources.css';
import { online } from '../images/dummydata';
import { Heading } from '../comman/heading'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { Head } from '../comman/head';
import { Footer } from '../comman/footer';
import './cources.css';

export function Onlinecource(){
    return(
        <>
         <Container fluid>
                <div className="hero">

                    <Head></Head>

                    {/* ======above class hero for bg img====== */}
                    <Row className="heading">
                        <Col style={{ marginTop: "80px" }}><h5>WELCOME TO ACADEMIA</h5></Col>
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
        <Container>
        <Row className='text-center mb-4'>
                    <Heading subtitle="COURSES" title="Browse Our Online Courses"></Heading>
                </Row>
                <Row>
                    {
                        online.map((value) => {
                            return (
                                <>

                                    <Col md={2} className='border'>
                                        <Image src={value.cover } ></Image>
                                        <h5 className='course'>{value.courseName}</h5>
                                        <h6 className='coursenumber'>{value.course}</h6>
                                    </Col>
                                </>
                            )
                        })
                    }
                </Row>
        </Container>
        
        <Footer></Footer>
        </>
    )
}