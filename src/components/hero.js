import React from 'react'
import './hero.scss'
import { Link } from "gatsby"


const Hero = props => (
  <div className="Hero">
        <div className="HeroGroup">
          <div className="HeroH1">
            <h1>{props.headline1}</h1>
            <h1>{props.headline2}</h1>
          </div>
          <p>{props.skills}</p>
        </div>
</div>
)

export default Hero




