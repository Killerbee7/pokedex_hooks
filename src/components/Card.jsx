import React from 'react';
import classes from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = ({image, name}) => {
    return (
        <div className={classes.card_main}>
            <div className={classes.image}>
                <img src={image} alt="" />
                </div>
                <div className={classes.card_details}>
                <h2>{name}</h2>
                
                <Link to={`${name}`}>See more</Link>
                
                
            </div>
            
        </div>
    );
};

export default Card;