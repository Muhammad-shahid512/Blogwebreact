import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

export default function Booking() {
  const { name } = useParams();

  const [booking, setBooking] = useState({
    name: "",
    email: "",
    country: name, 
    people: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://blogapp-28063-default-rtdb.firebaseio.com/bookings.json", booking)
      .then((response) => {
        console.log(response.status, response.data.token);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      setBooking({
        name:'',
        email:'',
        country:"",
        people:"",
      })
  };

  return (
    <div>
      <Container className='py-5'>
        <Row>
          <Col lg={6} className='mx-auto bg-info p-5' style={{ borderRadius: "20px", border: "1px solid pink" }}>
            <h4 className='text-center'>Order Booking</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' value={booking.name} onChange={handleChange} placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' value={booking.email} onChange={handleChange} placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" name='country' value={booking.country} onChange={handleChange} placeholder="" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>How many people</Form.Label>
                <Form.Control type="number" name='people' value={booking.people} onChange={handleChange} placeholder='People'  required/>
              </Form.Group>
              <Button type='submit' variant="secondary">Submit Now</Button>{' '}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
