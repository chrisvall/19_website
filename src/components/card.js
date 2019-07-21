import React from 'react'
import './card.scss'

const Card = props => (
    <div className="Card">
        <img src={props.image} />
        <h3>{props.title}</h3>
        <div class="Stroke"></div>
        {/* is this right react? */}
        <h2>{props.text}</h2>
    </div>
)

export default Card