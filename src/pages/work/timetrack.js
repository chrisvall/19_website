import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Img from "gatsby-image"
import back from "../../images/backarrow.svg"

import Hero from '../../components/Hero';
import PortfolioImg from '../../components/PortfolioImg';
import PortfolioText from '../../components/PortfolioText';


const PortfolioPage = () => (
  <Layout>
    <SEO title="TimeTrack" />
    <div className="Margin">
      <div className="Backarrow"><Link to="/"> <img src={back} /></Link></div>
      <div className="Portfolio-Hero">
        <Hero 
        headline = "TimeTrack – an app for lorem ipsum dorlor sit darum."
        skills="UI / UX / App Design  / Wireframing / Specs"
        />
       </div>
    </div>
  
    <PortfolioImg image={require('../../images/portfolio/timetrack/Vallaure-TimeTrack-01@2x.jpg')}/>
    <PortfolioText text="TimeTrack is an app that facilitates the tracking of individual project progress. In a first stage the MVP was created with the most simplistic “track and pause” functions. Further features can be added such as pre-set budgets, monitoring activity levels and automating invoices based on preset hourly rates and currencies. Carefully intertwining UX and UI with a minimalistic approach is what created TimeTrack’s pure look and solid user experience."/>
    <PortfolioImg image= {require('../../images/portfolio/timetrack/Vallaure-TimeTrack-02@2x.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/timetrack/Vallaure-TimeTrack-03@2x.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/timetrack/Vallaure-TimeTrack-04@2x.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/timetrack/Vallaure-TimeTrack-05@2x.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/timetrack/Vallaure-TimeTrack-06@2x.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/timetrack/Vallaure-TimeTrack-07@2x.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/timetrack/Vallaure-TimeTrack-08@2x.jpg')} />

    <Link to="/">Go back to the homepage</Link>

  </Layout>
)

export default PortfolioPage
