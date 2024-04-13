import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./Search.css"
import { GiTireIronCross } from "react-icons/gi";
export default function Search({value,onchangedata,submitform,clearallData}) {
  return (
    <div>
    <Container className='py-3'>
    <Row>
    <Col lg={6} className='text-center mx-auto'>
    <form action="" onSubmit={submitform}>

    
   <div className="inputData d-flex">
   <Form.Control value={value} style={{fontSize:"16px"}} onChange={onchangedata} id='input'  size="lg" type="text" placeholder="Enter city name" />
   {value && <span id='cross' onClick={clearallData}><GiTireIronCross /></span>}
   <Button as="input" className='btn btn-lg' type="submit" value="Search" />{' '}
   </div>
    </form>
    </Col>
    </Row>
    </Container>

    </div>
  )
}
