import React from 'react'
import './portfolioText.scss'
import { Link } from "gatsby"


const PortfolioText = props => (
  <div className="PortfolioText">
          <p>{props.text}</p>
</div>
)

export default PortfolioText
