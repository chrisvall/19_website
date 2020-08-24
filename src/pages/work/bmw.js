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


const PortfolioPage = () => (
  <Layout>
    <SEO title="BMW" />
    <div className="Margin">
      <div className="Backarrow"><Link to="/"> <img src={back} /></Link></div>
      <div className="Portfolio-Hero">
        <Hero 
        headline1 = "BMW – introducing the new BMWi with a page update."
        skills="UI – online branding – web design – template design"
        />
       </div>
    </div>
  
    <PortfolioImg image={require('../../images/portfolio/bmw/2xlarge/Vallaure-BMW-1@2x.jpg')}/>
    <PortfolioText text="The BMW Design Template creates the base for the worldwide rollout of the BMW website and is an integral element for brand communication. I was part of the BMW Digital Design team (freelancing via Interone) for this global project and was involved in CRM topics (MyBMW), the Car Configurator, and the online implementation of BMWi."/>
    <PortfolioImg image= {require('../../images/portfolio/bmw/2xlarge/Vallaure-BMW-2@2x.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/bmw/2xlarge/Vallaure-BMW-3@2x.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/bmw/2xlarge/Vallaure-BMW-4@2x.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/bmw/2xlarge/Vallaure-BMW-5@2x.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/bmw/2xlarge/Vallaure-BMW-6@2x.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/bmw/2xlarge/Vallaure-BMW-7@2x.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/bmw/2xlarge/Vallaure-BMW-8@2x.jpg')} />



  </Layout>
)

export default PortfolioPage
