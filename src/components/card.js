import React from 'react'
import './card.scss'
import { Link } from "gatsby"

const Card = props => (
    <div className="Card">
        <a href={props.link}>
        <a href={props.linkext} target="_blank" >
            <img src={props.image} />
            <div className="Card-TextContainer">
                <div className="Stroke"></div>
                <div>
                    <h3>{props.title}</h3>
                    <h2>{props.text}</h2>
                </div>
            </div>
        </a>
        </a>
    </div>
)

// const Card = props => (
//     <div className="Card">
//         <a href={props.link}>
//         <a href={props.linkext} target="_blank" >
//         <img src={props.image} />
//         <h3>{props.title}</h3>
//         <div className="Stroke"></div>
//         <h2>{props.text}</h2>
//         </a>
//         </a>
//     </div>
// )



export default Card