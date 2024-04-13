import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import './Blog.css';
import { Link } from 'react-router-dom';

export default function BlogList({ blog }) {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6; // Number of blogs to display per page

    // Get current blogs based on pagination
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blog.slice(indexOfFirstBlog, indexOfLastBlog);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container>
            <Row>
                <Col lg={12} >
                    <Row >
                        {currentBlogs.map((blg, index) => (
                            <Col lg={4} key={index}>
                                <Link to={`blog/${blg.id}`} style={{ textDecoration: "none" }}>
                                    <Card>
                                        <div className="imgblog" style={{ overflow: "hidden" }}>
                                            <Card.Img variant="top" id='img' src={blg.img} />
                                        </div>
                                        <Card.Body>
                                            <Card.Title className='text-center heading' style={{ color: "#203A43", fontFamily: "monospace" }}>{blg.name}</Card.Title>
                                            <Card.Text id='title'>
                                                {blg.title}
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        <Col className="pagination justify-content-center mt-2">
                            {blog.length > blogsPerPage && (
                                <ul className="pagination">
                                    {[...Array(Math.ceil(blog.length / blogsPerPage)).keys()].map((number) => (
                                        <li key={number + 1} className="page-item">
                                            <button onClick={() => paginate(number + 1)} className="page-link">
                                                {number + 1}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
