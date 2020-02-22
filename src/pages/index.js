import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Card from '../components/card-v2';
import CardArticle from '../components/card-article';
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
        link="/work/vera/"
        image={require('../images/intro-vera.gif')}
        name= "VERA"
        description=" Manage all contracts via app"/>
      <Card
        link="/work/factory/"
        image={require('../images/intro-factory2.jpg')}
        name= "FACTORY"
        description="community building online tool"/>
        
      <div>
        <CardArticle
        link="https://medium.com/sketch-app-sources/truly-fluid-typography-257a2b434105"
        image={require('../images/intro-article-1.jpg')}
        description="Fruly Fluid Typography"/>

        <CardArticle
        link="https://medium.com/sketch-app-sources/understanding-css-grid-ce92b7aa67cb"
        image={require('../images/intro-article-2.jpg')}
        name= "ARTICLE"
        description="CSS Grid and Sketch"/>
      </div>
        
      <Card
        link="/work/timetrack/"
        image={require('../images/intro-timetrack.jpg')}
        name= "TIME TRACK"
        description="the simple project tracking app"/>

      <Card
        link="/work/bmw/"
        image={require('../images/intro-BMW.jpg')}
        name= "BMW"
        description="Company website for the BWMi lauch "/>
        
      <div>
        <CardArticle
        link="https://medium.com/sketch-app-sources/design-hand-off-tools-in-comparison-zeplin-invision-avocode-and-sketch-measure-f871c5ee5ea3"
        image={require('../images/intro-article-3.jpg')}
        description="Sketch to React"/>

        <CardArticle
        link="https://medium.com/sketch-app-sources/design-hand-off-tools-in-comparison-zeplin-invision-avocode-and-sketch-measure-f871c5ee5ea3"
        image={require('../images/intro-article-4.jpg')}
        name= "ARTICLE"
        description="Design Hand-Off Tools"/>
      </div>

      <Card
        link="/work/mika/"
        image={require('../images/intro-mira.jpg')}
        name= "MIKA"
        description="Cancer companion App "/>
        
        <Card
        link="/work/bbs/"
        image={require('../images/intro-bbs.jpg')}
        name= "BBS"
        description="New identity and website "/>
        

      </div>

    </div>


  </div>

  </Layout>
)


export default IndexPage
