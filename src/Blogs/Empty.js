import React from 'react'
import nodata from "./img/nodata.jpg"
import { Container,Row,Col } from 'react-bootstrap'
export default function Empty({data}) {
  return (
    <div>
    <Container>
    <Row>
    <Col className="text-center">
    <h5>No Data: {data}</h5>

    <img src={nodata} className='img-fluid' style={{width:"500px"}}></img>
    </Col>
    </Row>
    </Container>
    </div>
  )
}
