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
    <SEO title="Berline British School" />
    <div className="Margin">
      <div className="Backarrow"><Link to="/"> <img src={back} /></Link></div>
      <div className="Portfolio-Hero">
        <Hero 
        headline1 = "BBS – an app for lorem ipsum dorlor sit darum."
        skills="UI / UX / App Design  / Wireframing / Specs"
        />
       </div>
    </div>
  
    <PortfolioImg image={require('../../images/portfolio/bbs/Vallaure-bbs-01@2x.jpg')}/>
    <PortfolioText text="Berlin British School (BBS) is an international private school for children aged between 3 and 18. The website is the key marketing tool for BBS. It showcases the academic programme on offer and the school’s idyllic location in the middle of Grunewald. The viewer is drawn into the large-scale pictures displaying the school’s vibrant and welcoming atmosphere. A straightforward structure based on a modular system allows for the rapid expansion of new topics on the page. (Thank you to oBrands for the programming)."/>

    <PortfolioImg image= {require('../../images/portfolio/bbs/Vallaure-bbs-03@2x.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/bbs/Vallaure-bbs-04@2x.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/bbs/Vallaure-bbs-05@2x.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/bbs/Vallaure-bbs-06@2x.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/bbs/Vallaure-bbs-07@2x.jpg')} />
    <PortfolioImg image= {require('../../images/portfolio/bbs/Vallaure-bbs-08@2x.jpg')} />

   


  </Layout>
)

export default PortfolioPage
