import React from 'react'
import './hero.scss'
import { Link } from "gatsby"


const Hero = props => (
  <div className="Hero">
        <div className="HeroGroup">
          <h1>{props.headline}</h1>
          <p>{props.skills}</p>
        </div>
</div>
)

export default Hero




