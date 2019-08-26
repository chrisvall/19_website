import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Img from "gatsby-image"
import back from "../../images/backarrow.svg"


// fix const name
const PortfolioPage = () => (
  <Layout>
    <SEO title="TimeTrack" />
    <div className="Margin">
      <div className="Backarrow"><Link to="/"> <img src={back} /></Link></div>
        <div className="Hero">
            <div className="HeroGroup">
            <div className="SpacerHack"></div>
                <h1>TimeTrack – an app for lorem ipsum dorlor sit darum.</h1>
                <p>APP DESIGN | UI/UX | WIREFRAMING | SPECS </p>
            </div>
        </div>
    </div>


    {/* css for now in layout.scss */}
    <div className="Portfolio">
      <img src={require('../../images/portfolio/timetrack/Vallaure-TimeTrack-01@2x.jpg')} />
      <p>TimeTrack is an app that facilitates the tracking of individual project progress. 
        In a first stage the MVP was created with the most simplistic “track and pause” 
        functions. Further features can be added such as pre-set budgets, monitoring activity 
        levels and automating invoices based on preset hourly rates and currencies. Carefully 
        intertwining UX and UI with a minimalistic approach is what created TimeTrack’s pure 
        look and solid user experience.</p>
      <img src={require('../../images/portfolio/timetrack/Vallaure-TimeTrack-02@2x.jpg')} />
      <img src={require('../../images/portfolio/timetrack/Vallaure-TimeTrack-03@2x.jpg')} />
      <img src={require('../../images/portfolio/timetrack/Vallaure-TimeTrack-04@2x.jpg')} />
      <img src={require('../../images/portfolio/timetrack/Vallaure-TimeTrack-05@2x.jpg')} />
      <img src={require('../../images/portfolio/timetrack/Vallaure-TimeTrack-06@2x.jpg')} />
      <img src={require('../../images/portfolio/timetrack/Vallaure-TimeTrack-07@2x.jpg')} />
      <img src={require('../../images/portfolio/timetrack/Vallaure-TimeTrack-08@2x.jpg')} />
    </div>

  

    <Link to="/">Go back to the homepage</Link>

  </Layout>
)

export default PortfolioPage
