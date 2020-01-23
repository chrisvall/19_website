import React from 'react'
import './skill.scss'


const Skill = props => (
    <div className="Skill">
        <div>
            <h3>{props.headline}</h3>
            <p>{props.bullet1}</p>
            <p>{props.bullet2}</p>
            <p>{props.bullet3}</p>
            <p>{props.bullet4}</p>
        </div>
    </div>
)

export default Skill