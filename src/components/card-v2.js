import React from 'react'
import './card-v2.scss'


const Card = props => (
    <div className="Card">
        <a href={props.link}>
            <img src={props.image} />
            <div className="Card-TextContainer">
                    <h2 className="bold">{props.name}</h2> 
                    <h2 className="stroke">{props.description}</h2>
            </div>
        </a>
    </div>
)


export default Card