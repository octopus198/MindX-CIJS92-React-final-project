import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

const MovieCard = () => {
  return (
    <div>
      <Card >
      {/* style={{ width: "18rem" }} */}
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71BgdzmFDAL._AC_UF894,1000_QL80_.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
