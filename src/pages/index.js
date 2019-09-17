import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Card from '../components/Card';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="Margin">
    <SEO title="Home" />

    <Hero 
      headline1 = "Hi, I’m Christine,"
      headline2 = "UX/UI designer with a passion for code."
      skills="UI / UX / App / Web /  Freelance / Berlin"
    />


 <div className="Cards">
    <div className="CardGroup">
 
      <Card 
        link="/work/timetrack/"
        image={require('../images/imgtest1.jpg')}
        title="UX / UI / App / Brand Design"
        text= "Mika – Krebs Therapie Assistent App 
        für iOS und Android"/>
        <Card 
        link="/work/bbs/"
        image={require('../images/mira.jpg')}
        title="UX / UI / App / Web / Brand Design "
        text= "VERA – App zur einfachen Verwaltung von Verträge & Dokumente "/>
         <Card 
        image={require('../images/imgtest2.png')}
        title="Article"
        text= "Design Hand-Off Tools in Comparison: Zeplin, InVision, Avocode and Sketch Measure"/>
        <Card 
        linkext="https://medium.com/sketch-app-sources/design-hand-off-tools-in-comparison-zeplin-invision-avocode-and-sketch-measure-f871c5ee5ea3"
        image={require('../images/article_test1.jpg')}
        title="ARTICLE "
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



    </div>

  </Layout>


)



export default IndexPage
