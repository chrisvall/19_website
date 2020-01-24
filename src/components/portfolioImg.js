import React from 'react'
import './portfolioImg.scss'


const PortfolioImg = props => (
    <div className="Portfolio">
        <img src={props.image} />   
   </div>
  
)

export default PortfolioImg