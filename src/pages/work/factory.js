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
    <SEO title="Factory" />
    <div className="Margin">
      <div className="Backarrow"><Link to="/"> <img src={back} /></Link></div>
      <div className="Portfolio-Hero">
        <Hero 
        headline1 = "Factory – building an online tool to connect talent and likeminded"
        skills="UX – UI – app design – wireframing – specs – prototyping"
        />
       </div>
    </div>
  
    <PortfolioImg image={require('../../images/portfolio/factory/Vallaure-factory-01.jpg')}/>
    <PortfolioText text="
    Factory Berlin is an ecosystem of more than 3,000 members from over 70 nations. In two impressive co-working spaces in Berlin. Factory brings together the brightest minds in tech, politics, art, and design.
    In order to connect talent and likeminded within its community, Factory has set out to build its own online platform. I was part of a small team that brought the first ideas for a community tool to life. We started with workshops and sketches to collect different ideas and approaches. We then developed an MVP consisting of profile pages and filter options. The platform is based on a modular system that contains adaptive and responsive UI components in a sketch library. 
    The digital community platform is an agile and constantly changing project. On this page, I give an overview of the designs I created for the first round of the platform.     
    "/>
    <PortfolioImg image= {require('../../images/portfolio/factory/Vallaure-factory-02.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/factory/Vallaure-factory-03.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/factory/Vallaure-factory-04.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/factory/Vallaure-factory-05.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/factory/Vallaure-factory-06.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/factory/Vallaure-factory-07.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/factory/Vallaure-factory-08.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/factory/Vallaure-factory-09.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/factory/Vallaure-factory-10.jpg')} />

    


  </Layout>
)

export default PortfolioPage