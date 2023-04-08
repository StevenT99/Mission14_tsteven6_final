import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Podcast = () => {
  return (
    <Card>
      <Card.Header as="h5">Baconsale</Card.Header>
      <Card.Body>
        <Card.Title>
          A hilarious podcast about movies, pop culture, and bacon
        </Card.Title>
        <Card.Text>
          Check it out at{' '}
          <a href="https://baconsale.com">https://baconsale.com</a>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          Why did the bacon break up with the tomato? Because it couldn't
          ketchup!
        </small>
      </Card.Footer>
    </Card>
  );
};

export default Podcast;
