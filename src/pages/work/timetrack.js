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
        <div className="Hero">
            <div className="HeroGroup Portfolio">
            <div className="Backarrow"><Link to="/"> <img src={back} /></Link></div>
                <h1>TimeTrack – an app <br></br>for lorem ipsum dorlor sit darum.</h1>
                <p>APP DESIGN | UI/UX | WIREFRAMING | SPECS </p>
            </div>
        </div>
    </div>

    {/* <img src={"../../images/backarrow.png"} /> */}
    {/* image={require('../images/imgtest1.jpg')} */}

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
