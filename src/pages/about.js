import React from "react"
import Header from '../components/Header';
import Layout from "../components/layout"
import Hero from "../components/hero"
import ImgText from "../components/block-imgtext"
import TextImg from "../components/block-textimg"
import Skill from "../components/skill"
import Image from "../components/image"



const About = () => (
  <Layout>
    <div className="Margin">
      <Hero 
        headline1 = "This is me"
        headline2 = "Lorem ipsum dalur sorumg"
        skills="UI / UX / App / Web /  Freelance / Berlin"
      />
    </div>

      <ImgText
        image={require('../images/christinevallaure.png')}
        description = "I am a freelance creative, designing (and occasionally building) Websitea and Apps. 
        I’m Christine. I’m a designer who codes. I’ve worked internationally, in-house, and remotely on projects for leading brands, agencies, startups, and charities. I care deeply about creating world-class, useful, and beautiful products that help people and make a difference. I can be as involved in your project as you need me to be; from the seed of the idea, to sketches, creative direction, design, copywriting, system design, and even the front-end build. (copied from Andrew couldwell)
        My passion is teaching lorem ipsum. I have workd for over 10 years moved from banding to lorem ipsum"
        linkname = "LinkedIn"
        link="https://www.linkedin.com/in/christinevallaure/"
      />

    
    <div className = "Margin">
      <div className = "SkillGroup">
        <Skill
          headline = "Area of expertise"
          bullet1 = "UX & UI"
          bullet2 = "App Design"
          bullet3 = "Web Design"
          bullet4 = "Teaching"
        />
        <Skill
          headline = "My Tools"
          bullet1 = "Sketch"
          bullet2 = "InVision"
          bullet3 = "Flinto"
          bullet4 = "Zeplin"
        />
        <Skill
          headline = "Web Favorites"
          bullet1 = "CSS & SASS"
          bullet2 = "HTML"
          bullet3 = "Angular JS"
          bullet4 = "jQuery"
        />
        <Skill
          headline = "Communicate in"
          bullet1 = "German"
          bullet2 = "English"
          bullet3 = "Spanish"
          bullet4 = "Images"
        />
      </div>
    </div>


    <TextImg
        subtitle = "My passion Project"
        title = "Teaching digital design"
        image={require('../images/book.jpg')}
        description = "I am a freelance creative, designing (and occasionally building) Websitea and Apps. 
        I’m Christine. I’m a designer who codes. I’ve worked internationally, in-house, and remotely on projects for leading brands, agencies, startups, and charities. I care deeply about creating world-class, useful, and beautiful products that help people and make a difference. I can be as involved in your project as you need me to be; from the seed of the idea, to sketches, creative direction, design, copywriting.
      "
        linkname = "Medium Articles"
        link="https://medium.com/@christinevallaure/"
      />
        

        
    
    

  </Layout>
)
export default About