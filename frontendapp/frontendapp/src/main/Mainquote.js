import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import 'bootstrap/dist/css/bootstrap.min.css'

function Mainquote() {
  return (
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>New arrivals are waiting for you !!</Card.Title>
        <Card.Text>
          Discover the latest in mobility. From bicycles to ships, find your perfect vehicle with us.
        </Card.Text>
        {/* Link button to the user login page */}
        <Link to="/userlogin">
          <Button variant="primary">Login now </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Mainquote;
