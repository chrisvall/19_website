import React from 'react'
import './footer.scss'
import Headline3 from "../components/headline3"



const Footer = props => (
  <div className="Footer">
      <div className="Footer-part1">
         <h3 className="bold">Contact:</h3>
         <a href="mailto:mail@christinevallaure.com?subject=Mail via Website"><p>mail@christinevallaure.com</p></a>
         <a href="tel:+4917610064926"><p>+49 176 1006 49 26</p></a>
         <a href="https://www.linkedin.com/in/christinevallaure/" target="_blank" rel="noopener noreferrer"><p>LinkedIn</p></a>
      </div>

      <br/><br/>
      <div className="Footer-part2">
         © {new Date().getFullYear()}, 
            {` `}
            <a href="http://www.christinevallaure.com">Christine Vallaure</a>
      </div>

      <div className="Footer-part3">
         <a href="/imprint"><p>imprint</p></a>
         <a href="/terms"><p>terms</p></a>
      </div>
</div>
)


export default Footer