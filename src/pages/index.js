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

    {/* <Hero 
      headline1 = "Hi, I’m Christine,"
      headline2 = "UX/UI Designer with a passion for code."
      skills="christinevallaure@gmail.com"
      tel="+49 176 1006 4926"
    /> */}

    <div className="Hero">
        <div className="HeroGroup">
          <div className="HeroH1">
            <h1>Hi, I'm Christine</h1>
            <h1>UX/UI Designer with a passion for code.</h1>
          </div>
          <a href="mailto:mail@christinevallaure.com?subject=Mail via Website"><p className="block mail"> mail@christinevallaure.com</p></a>
          <a href="tel:+4917610064926" ><p className="block tel">+49 176 1006 49 26</p></a>
        </div>
    </div>

    <div className="Cards">
     <div className="CardGroup">
 
      <div className="one">
        <Card
          link="/work/vera/"
          image={require('../images/intro-vera.gif')}
          name= "VERA"
          description=" manage all contracts via app"/>
      </div>

      <div className="two">
      <Card
        link="/work/factory/"
        image={require('../images/intro-factory2.jpg')}
        name= "FACTORY"
        description="community building tool"/>
      </div>
        
      <div className= "CardArticleGroup three">
        <CardArticle
        link="https://medium.com/sketch-app-sources/truly-fluid-typography-257a2b434105"
        image={require('../images/article-1.jpg')}/>

        <CardArticle
         className = "2"
        link="https://medium.com/sketch-app-sources/understanding-css-grid-ce92b7aa67cb"
        image={require('../images/article-2.jpg')}/>
      </div>
        
      <div className= "four">
      <Card
        link="/work/timetrack/"
        image={require('../images/intro-timetrack.jpg')}
        name= "TIME TRACK"
        description="the project tracking app"/>
      </div>


      <div className= "five">
      <Card
        link="/work/mika/"
        image={require('../images/intro-mika.gif')}
        name= "MIKA"
        description="cancer companion app"/>
      </div>
        
      <div className="CardArticleGroup six">
        <CardArticle
        link="https://medium.com/sketch-app-sources/design-hand-off-tools-in-comparison-zeplin-invision-avocode-and-sketch-measure-f871c5ee5ea3"
        image={require('../images/article3.jpg')}/>

        <CardArticle
        link="https://medium.com/@christinevallaure"
        image={require('../images/article4.jpg')}/>
      </div>

      <div className= "seven">
      <Card
        link="/work/bmw/"
        image={require('../images/intro-BMW.jpg')}
        name= "BMW"
        description="BMWi launch website"/>
      </div>
      
      <div className= "seven">
        <Card
        link="/work/bbs/"
        image={require('../images/intro-bbs.jpg')}
        name= "BBS"
        description="new identity and website"/>
      </div>
        

      </div>

    </div>


  </div>

  </Layout>
)


export default IndexPage
