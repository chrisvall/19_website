import React from 'react'
import './portfolioImg.scss'
import { Link } from "gatsby"

const PortfolioImg = props => (
    <div className="Portfolio">
        <img src={props.image} />   
   </div>
  
)

export default PortfolioImg