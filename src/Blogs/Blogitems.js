import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
export default function Blogitems({blg:{
    id,
    name,
    img,
}}) {
  return (
    <div>
    <Container>
    <Row>
    <Col lg={3} className='d-flex'>
    <p>{id}</p>
    <p>{name}</p>
    <img src={img} className='img-fluid' alt="" />
    </Col>
    </Row>
    </Container>
   
    </div>
  )
}
