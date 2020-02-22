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
        headline1 = "Factory – web app for lorem ipsum dorlor sit darum."
        skills="UI / UX / App Design  / Wireframing / Specs"
        />
       </div>
    </div>
  
    <PortfolioImg image={require('../../images/portfolio/factory/Vallaure-factory-01.jpg')}/>
    <PortfolioText text="TimeTrack is an app that facilitates the tracking of individual project progress. In a first stage the MVP was created with the most simplistic “track and pause” functions. Further features can be added such as pre-set budgets, monitoring activity levels and automating invoices based on preset hourly rates and currencies. Carefully intertwining UX and UI with a minimalistic approach is what created TimeTrack’s pure look and solid user experience."/>
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