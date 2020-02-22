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
import Video from "../../images/portfolio/mika/Vallaure-mika-06.mp4";



const PortfolioPage = () => (
  <Layout>
    <SEO title="Mika" />
    <div className="Margin">
      <div className="Backarrow"><Link to="/"> <img src={back} /></Link></div>
      <div className="Portfolio-Hero">
        <Hero 
        headline1 = "Mika –  lorem ipsum dolor sit "
        skills="ONLINE BRANDING | WEB DESIGN | TEMPLATES | GRAPHIC DESIGN"
        />
       </div>
    </div>

 
 
    <PortfolioImg image={require('../../images/portfolio/mika/Vallaure-mika-01.jpg')}/>
    <PortfolioText text="The BMW Design Template creates the base for the worldwide rollout of the BMW website and is an integral element for brand communication. I was part of the BMW Digital Design team (freelancing via Interone) for this global project and was involved in CRM topics (MyBMW), the Car Configurator and the online implementation of BMWi."/>
    <PortfolioImg image= {require('../../images/portfolio/mika/Vallaure-mika-03.jpg')} />
  
    <PortfolioImg image= {require('../../images/portfolio/mika/Vallaure-mika-02.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/mika/Vallaure-mika-04.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/mika/Vallaure-mika-05.jpg')} />
    <video autoPlay playsinline muted loop><source src={Video} type="video/mp4" /></video>
    <PortfolioImg image= {require('../../images/portfolio/mika/Vallaure-mika-07.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/mika/Vallaure-mika-08.jpg')} />



  </Layout>
)

export default PortfolioPage
