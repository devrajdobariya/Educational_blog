import { Row,Col } from "react-bootstrap";
import './heading.css';



export function Heading({subtitle,title}){

    return(
        <>
          <Row className="rowheading" >
            <Col className="heading subtitle"><h5>{subtitle}</h5></Col>
          </Row>
          <Row >
            <Col className="heading title"><h1>{title}</h1></Col>
          </Row>
        
        </>
    )
}