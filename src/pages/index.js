import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Card from '../components/Card';
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Hi, I’m Christine, <br></br> UX/UI designer with a passion for code.</h1>
        <p>UI / UX / App / Web / Teaching / Freelance / Berlin </p>
      </div>
    </div>

 <div className="Cards">
    <div className="CardGroup">
      <Card 
        image={require('../images/imgtest1.jpg')}
        title="UX / UI / App / Brand Design"
        text= "Mika – Krebs Therapie Assistent App 
        für iOS und Android"/>
        <Card 
        image={require('../images/imgtest2.png')}
        title="UX / UI / App / Web / Brand Design "
        text= "VERA – App zur einfachen Verwaltung von Verträge & Dokumente "/>
         <Card 
        image={require('../images/imgtest2.png')}
        title="Article"
        text= "Design Hand-Off Tools in Comparison: Zeplin, InVision, Avocode and Sketch Measure"/>
        <Card 
        image={require('../images/imgtest1.jpg')}
        title="UX / UI / App / Brand Design "
        text= "TimeTrack - an app to facilitates the tracking of individual project progress"/>
        <Card 
        image={require('../images/imgtest1.jpg')}
        title="UX / UI / Webdesign "
        text= "Factory – Community page building lorem ipsum dolor sit"/>
        <Card 
        image={require('../images/imgtest1.jpg')}
        title="Article "
        text= "Understand CSS Grid and translate to responsive Sketch layouts"/>
    </div>
  </div>

 
    <Link to="/page-2/">Go to page 2</Link>
 

 
  </Layout>
)



export default IndexPage
