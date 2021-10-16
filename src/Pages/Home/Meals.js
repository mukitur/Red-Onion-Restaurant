import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Meal from '../Meal/Meal';
import img1 from '../../images/why-choose-us/best-food.png';
import img2 from '../../images/why-choose-us/best-chef.png';
import img3 from '../../images/why-choose-us/home-delivery.png';

const Meals = () => {
    const [meals, setMeals] =useState([]);
    useEffect( ()=>{
        fetch('./home-menu.json')
            .then(res=>res.json())
            .then(data=>setMeals(data))
    }, [])

    return (
        <div>
            <div className="my-5 mx-5">
                <h2 className="my-4"> All Foods</h2>
                <Row xs={2} md={4} className="g-4 3 my-4">
                    {
                        meals.map(meal=> <Meal
                            key={meal.id}
                            meal={meal}
                        ></Meal>)
                    }
                </Row>
                <Link to = '/menu'><Button variant="info">Show All Fooods</Button></Link>
            </div>

            <div className="my-5 mx-5">
                <h3 className="text-start">Why Choose us?</h3>
                <p className="text-start ">Worlds best Bangeli and Indian food is availabe with clean environment and friendly staff. The price is also affordable.</p>

                <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                    <div className="col">
                        <div className="card border-white">
                        <img src= {img1} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title text-start">Best Food</h5>
                            <p className="card-text text-start">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-white">
                        <img src={img2} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title text-start">Best Chef</h5>
                            <p className="card-text text-start">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-white">
                        <img src={img3} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title text-start">Home Delivery</h5>
                            <p className="card-text text-start">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        </div>
                </div>
  
                </div>


            </div>
        </div>
    );
};

export default Meals;