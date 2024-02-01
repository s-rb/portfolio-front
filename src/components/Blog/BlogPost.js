import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import {Col, Container, Row} from "react-bootstrap";
import Particle from "../Particle" ;

function BlogPost() {
    const [post, setPost] = useState(null);
    const { postId } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://blog.surkoff.com/api/post/${postId}`);
                console.log(response);
                setPost(response.data);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };
        fetchPost();
    }, [postId]);

    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "0px" }}>
                    <Col
                        style={{
                            justifyContent: "center",
                            paddingTop: "0px",
                            paddingBottom: "0px",
                        }}
                    >
                        {post && ( // Добавляем проверку наличия данных post
                            <div>
                                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>{post.title}</h1>
                                <Card className="quote-card-view">
                                    <div className="blockquote mb-0 p-3" style={{textAlign: "justify"}}>
                                        <div style={{ fontSize: "1.05rem"}} dangerouslySetInnerHTML={{ __html: post.text }}></div>
                                        <div className="blogpost-stats" style={{marginTop: 20, textAlign: "right", fontSize: "1rem"}}>
                                            <div>Likes: {post.likeCount}</div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default BlogPost;