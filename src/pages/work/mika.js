import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Img from "gatsby-image"
import back from "../../images/backarrow.svg"

import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import PortfolioImg from '../../components/PortfolioImg';
import PortfolioText from '../../components/PortfolioText';
import Video1 from "../../images/portfolio/mika/Vallaure-mika-04.mp4";
import Video2 from "../../images/portfolio/mika/Vallaure-mika-06.mp4";



const PortfolioPage = () => (
  <Layout>
    <SEO title="Mika" />
    <div className="Margin">
      <div className="Backarrow"><Link to="/"> <img src={back} /></Link></div>
      <div className="Portfolio-Hero">
        <Hero 
        headline1 = "Mika –  the companion through cancer therapy. "
        skills="UX – UI – app design – wireframing – specs – prototyping"
        />
       </div>
    </div>

 
 
    <PortfolioImg image={require('../../images/portfolio/mika/Vallaure-mika-01.jpg')}/>
    <PortfolioText text="
    Cancer patients use the Mika app to keep a digital diary of their state of health and the course of therapy. Besides, the app contains the Mika Magazine filled with articles about research, therapy options, and tips for a better quality of life through these difficult times. 

    When designing the UI of the app we turned away from the initial clinical look & feel and moved towards a warm and approachable design. A wide landscape that changes colour and mood according to the daily check-up results. "/>
    <PortfolioImg image= {require('../../images/portfolio/mika/Vallaure-mika-03.jpg')} />
  
    <PortfolioImg image= {require('../../images/portfolio/mika/Vallaure-mika-02.jpg')} />
    <video autoPlay playsinline muted loop><source src={Video1} type="video/mp4" /></video>
    <PortfolioImg image= {require('../../images/portfolio/mika/Vallaure-mika-05.jpg')} />
    <video autoPlay playsinline muted loop><source src={Video2} type="video/mp4" /></video>
    <PortfolioImg image= {require('../../images/portfolio/mika/Vallaure-mika-07.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/mika/Vallaure-mika-08.jpg')} />



  </Layout>
)

export default PortfolioPage
