import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BlogApi } from '../Blogs/BlogApi';
import { Container, Row, Col } from 'react-bootstrap';
import "./Detail.css"
export default function DetailBlog() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const selectedBlog = BlogApi.find((blog) => blog.id === parseInt(id));
        if (selectedBlog) {
            setBlog(selectedBlog);
        }
    }, [id]);

    return (
        <div>
        {blog &&(
            <h5 className='text-center titlebook '>{blog.categorie} for Travelling👇 Booking Now</h5>

        )}
            <Container className='p-5' style={{marginTop:"70px",backgroundColor:"whitesmoke",borderRadius:"30px"}}>
                <Row style={{alignItems:"center"}}>
                    <Col lg={6} className=''>
                        {blog && (
                            <Card>
                                <Card.Img variant="top" src={blog.img} className='img-fluid' alt="Blog" />
                            </Card>
                        )}
                    </Col>
                    <Col lg={6}>
                    {
                        blog &&(
                            <Card.Body>
                                <div className="title" style={{textAlign:"justify"}}>{blog.dec}</div>
                                <Button className='mt-2'>
                                <Link to={`/Booking/${blog.name}`} style={{color:"black", textDecoration:"none"}}>Booking</Link>
                                </Button>
                            </Card.Body>
                        
                        )
                    }
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
