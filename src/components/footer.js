import React from 'react'
import './footer.scss'
import { Link } from "gatsby"


const Footer = props => (
  <div className="Footer">
       <p className="bold">Contact me:</p>
       <a href=""><p>mail@christinevallaure.com</p></a>
       <a href=""><p>LinkedIn</p></a>
       <br></br>
       © {new Date().getFullYear()}, 
          {` `}
          <a href="http://www.christinevallaure.com">Christine Vallaure</a>

  

       <p>Impressum AGB</p>
</div>
)




export default Footer