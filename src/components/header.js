import React from "react"
import Link from 'gatsby-link'
import './header.scss'


const Header = ({ siteTitle }) => (


  <div className="Header">
    <div className="HeaderGroup">
      {/* <Link to="/"><img width="30" /></Link> */}
      {/* <Link to="/">Home</Link> */}
      <Link to="/work">work</Link>
      <Link to="/articles">articles</Link>
      <Link to="/about">about</Link>
      <Link to="/contact">contact</Link>
    </div>
  </div>


)


// window.onscroll = function() {myFunction()};

// var navbar = document.getElementsByClassName("Header");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.className.add("sticky")
//   } 
// }







export default Header
