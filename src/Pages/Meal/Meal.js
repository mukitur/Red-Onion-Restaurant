import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meal = ({meal}) => {
    const {img, description, price, Name, id} = meal;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{Name}</Card.Title>
                        <Card.Text><p>{description}</p></Card.Text>
                        <Card.Text><h3>${price}</h3></Card.Text>
                        <Link to = {`/mealdetails/${id}`}>
                            <Button  variant="danger">Meal Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Meal;