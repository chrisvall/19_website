import React from 'react'
import './footer.scss'
import { Link } from "gatsby"


const Footer = props => (
  <div className="Footer">
      <div className="Footer-part1">
         <p className="bold">Contact me:</p>
         <a href="mailto:mail@christinevallaure.com?subject=Mail via Website"><p>mail@christinevallaure.com</p></a>
         <a href="tel:+4917610064926"><p>+49 176 1006 49 26</p></a>
         <a href="https://www.linkedin.com/in/christinevallaure/" target="_blank" ><p>LinkedIn</p></a>
      </div>

      <br/><br/>
      <div className="Footer-part2">
         © {new Date().getFullYear()}, 
            {` `}
            <a href="http://www.christinevallaure.com">Christine Vallaure</a>
      </div>

      <div className="Footer-part3">
         <a href=""><p>Impressum</p></a>
         <a href=""><p>AGB</p></a>
      </div>
</div>
)




export default Footer