import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function BlogListItem(props) {
    return <Card className="bloglist-item-card-view">
        <Card.Header><Card.Title style={{paddingTop: "1em"}}>{props.post.title}</Card.Title></Card.Header>
        <Card.Body>
            <p style={{textAlign: "justify"}} className="project-description">{props.post.announce}</p>
            <Button className="bloglist-item-more-button" variant="primary" href={`/blog/${props.post.id}`}>Read more</Button>
        </Card.Body>
    </Card>
}

export default BlogListItem;