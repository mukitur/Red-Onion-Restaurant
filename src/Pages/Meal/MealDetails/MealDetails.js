import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MealDetails = () => {
    const {mealId} = useParams();
    const [meal, setMeal] =useState([]);

    const url = `./home-menu.json/${mealId}`;

    useEffect( ()=>{
        fetch(url)
            .then(res=>res.json())
            .then(data=>setMeal(data))
    }, [])

    return (
        <div >
            <h2>Meal Details of id : {mealId}</h2>
            <p>{meal.Name}</p>

            <div className="container overflow-hidden">
                <div className="row gx-5">
                    <div className="col">
                        <div className="p-3 border bg-light">{mealId}</div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light">{meal.Name}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealDetails;