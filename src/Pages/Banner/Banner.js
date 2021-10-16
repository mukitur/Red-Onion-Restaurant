import React from 'react';
import { Button, Card, Carousel, Form, FormControl } from 'react-bootstrap';
import bgImg from '../../images/bg-home.png';

const Banner = () => {
    return (
        <div>
            <Card className="bg-white text-dark border-white">
                <Card.Img src={bgImg} alt="Banner image" />
                <Card.ImgOverlay>
                    <Card.Title><h2 className="mt-4 mb-3">Best Food is available for Order</h2></Card.Title>
                    <Card.Text className="w-50 m-auto"><Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search Food"
                        className="me-2 w-70"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form></Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Banner;