import React from "react"


import Header from '../components/Header';
import Contactinfo from '../components/contactinfo';



const ContactPage = () => (
  <div>
  <Header/>
    <Contactinfo></Contactinfo>

  <div className="FooterBottom">
    <div className="FooterBottomGrid">
      <div>
          {/* © {new Date().getFullYear()}, 
              {` `}
              <a href="http://www.christinevallaure.com">Christine Vallaure</a> */}
      </div>
      <div className="AgbImpressum">
          <a href="/imprint"><p>Impressum</p></a>
          <a href=""><p>AGB</p></a>
      </div>
    </div>
  </div>


      
  </div>
  )

export default ContactPage