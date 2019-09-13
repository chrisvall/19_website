import React from 'react'
import './card.scss'
import { Link } from "gatsby"

const Card = props => (
    <div className="Card">
        <Link to={props.link}>
        <img src={props.image} />
        <h3>{props.title}</h3>
        <div className="Stroke"></div>
        <h2>{props.text}</h2>
        </Link>
    </div>
)

export default Card