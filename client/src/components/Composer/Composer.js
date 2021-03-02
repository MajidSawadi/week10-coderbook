import React, { useState } from "react";
import { Card, Form, Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";

import "./style.css";

import { postActions } from "../../redux/actions";

const ComposerButton = ({ title, icon }) => {
  return (
    <Button className="d-flex justify-content-center align-items-center bg-white text-dark border-0 rounded">
      {" "}
      <FontAwesomeIcon icon={icon} className="mr-2" size="lg" />
      {title}
    </Button>
  );
};

export default function Composer() {
  const dispatch = useDispatch();
  const [post, setPost] = useState({ body: "" });

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(postActions.createPost(post.body));
  }

  const onChange = (e) => {
    setPost({ ...post, [e.target.id]: e.target.value });
  };

  return (
    <Card className="mb-3 w-100">
      <Card.Body>
        {" "}
        {/* STEP 2 */}
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Control
              id="body"
              type="text"
              onChange={onChange}
              placeholder="What's on your mind?"
            />
          </Form.Group>
        </Form>
      </Card.Body>
      <ButtonGroup size="lg" className="m-2">
        <ComposerButton title="Live Video" icon="video" />
        <ComposerButton title="Photo Video" icon="photo-video" />
        <ComposerButton title="Feeling/Activity" icon="smile" />
      </ButtonGroup>
    </Card>
  );
}