import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
// import Img from "gatsby-image"
import back from "../../images/backarrow.svg"

import Hero from '../../components/Hero';
import PortfolioImg from '../../components/PortfolioImg';
import PortfolioText from '../../components/PortfolioText';
import Vid from "../../images/portfolio/vera/Vallaure-Vera-02.mp4";


const PortfolioPage = () => (
  <Layout>
    <SEO title="Vera" />
    <div className="Margin">
      <div className="Backarrow"><Link to="/"> <img src={back} /></Link></div>
      <div className="Portfolio-Hero">
        <Hero 
        headline1 = "Vera App – manage all documents and insurances with one click."
        skills="UX – UX – app design – wireframing – specs – prototyping"
        />
       </div>
    </div>
  
    <PortfolioImg image={require('../../images/portfolio/vera/Vallaure-Vera-01.jpg')}/>
    <PortfolioText text="
    Vera app relieves you of all paperwork and provides you with a digital overview of all your 
    all insurance contracts in one place. Always know how and where you are insured and assure  
  in the event of damage. 
    Vera is a multitasker, thus we needed to make sure to keep the interface extra clean. The app and 
    brand were built completely from scratch creating an intuitive and unique tone of voice with a minimalistic 
    approach. 
    "/>
    <video autoPlay playsinline muted loop><source src={Vid} type="video/mp4" /></video>
    <PortfolioImg image= {require('../../images/portfolio/vera/Vallaure-Vera-03.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/vera/Vallaure-Vera-04.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/vera/Vallaure-Vera-05.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/vera/Vallaure-Vera-06.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/vera/Vallaure-Vera-07.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/vera/Vallaure-Vera-08.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/vera/Vallaure-Vera-09.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/vera/Vallaure-Vera-10.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/vera/Vallaure-Vera-11.jpg')} />
    


  </Layout>
)

export default PortfolioPage
