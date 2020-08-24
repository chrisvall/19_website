import React from 'react'
import './contactinfo.scss'


const Contact = props => (
  <div className="ContactBox">
  <a href="https://www.linkedin.com/in/christinevallaure/ " target="_blank" rel="noopener noreferrer"><h1>Christine Vallaure</h1></a>
  <a href="mailto:mail@christinevallaure.com?subject=Mail via Website"><h1>mail@christinevallaure.com</h1></a>
  <a href="tel:+4917610064926"><h1>+49 176 1006 49 26</h1></a>
  {/* <p>Berlin – Germany</p> */}
  <div class="row">
        <h3 class="block">Berlin</h3>
        <h3 class="block stroke">Germany</h3>
  </div>
</div>

)


export default Contact