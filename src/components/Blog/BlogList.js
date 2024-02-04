import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogListItem from "./BlogListItem";
import Particle from "../Particle";
import { Col, Container, Row } from "react-bootstrap";
import Pagination from 'react-bootstrap/Pagination';
import { useLocation } from 'react-router-dom';
// todo вынести в окружение host
function BlogList() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);
  const [totalPostsCount, setTotalPostsCount] = useState(0); // Declare totalPostsCount state variable
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(searchParams.get('page')) || 1;
    setCurrentPage(page);
  }, [location.search]);

  useEffect(() => {
    const fetchPosts = async () => {
      let url = `https://blog.surkoff.com/api/post?offset=${(currentPage - 1) * postsPerPage}&limit=${postsPerPage}&mode=recent`;
      const response = await axios.get(url);
      setPosts(response.data.posts);
      setTotalPostsCount(response.data.count); // Set the total posts count
    };
    fetchPosts();
  }, [currentPage, postsPerPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('page', pageNumber);
    window.location.search = searchParams.toString();
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">Blog</h1>

        <Row lg={1} sm={1} md={1} xs={1} style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {posts.map(post =>
              <Col className="bloglist-card">
                <BlogListItem key={post.id} post={post} />
              </Col>)}
        </Row>

        <div className="bloglist-pagination">
          <Pagination style={{display: "flex", justifyContent: "center"}}>
            {Array.from({ length: Math.ceil(totalPostsCount / postsPerPage) }, (_, index) => (
              <Pagination.Item
                  className="blog-page-buttons"
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={() => paginate(index + 1)}
                >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
      </Container>
    </Container>
  );
}

export default BlogList;
