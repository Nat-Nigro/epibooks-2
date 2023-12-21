import { Component } from "react";
import { Form } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    recensione: {
      comment: "",
      rate: "",
      elementId: "",
    },
  };

  fetchComments = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/");
      if (response.ok) {
        const comments = await response.json();
        this.setState({ comments });
      } else {
        this.setState({ hasError: true });
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Area Commento</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    );
  }
}

export default CommentArea;
