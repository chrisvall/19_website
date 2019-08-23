import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Img from "gatsby-image"

// fix const name
const PortfolioPage = () => (
  <Layout>
    <SEO title="TimeTrack" />
    <div className="Margin">
        <div className="Hero">
            <div className="HeroGroup">
            <div><Link to="/">Back</Link></div>
                <h1>TimeTrack – an app <br></br>for lorem ipsum dorlor sit darum.</h1>
                <p>APP DESIGN | UI/UX | WIREFRAMING | SPECS </p>
            </div>
        </div>
    </div>

  
    {/* css for now in layout.scss */}
    <div className="Portfolio">
      <img src={require('../../images/portfolio/timetrack/Vallaure-TimeTrack-01@2x.jpg')} />
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
