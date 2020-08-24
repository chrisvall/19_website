import React from "react"
import Header from '../components/Header';
import Layout from "../components/layout"
import Hero from "../components/hero"
import ImgText from "../components/block-imgtext"
import TextImg from "../components/block-textimg"
import Skill from "../components/skill"
import Image from "../components/image"
import Headline3 from "../components/headline3"



const About = () => (
  <Layout>
    <div className="Margin">
      <Hero 
        headline1 = "freelance creative, "
        headline2 = "with over 10 years of experience  
        in web & app design"
        skills=""
      />

      <ImgText
        number = "01"
        subline = "about"
        image={require('../images/christinevallaure.jpg')}
      />

      <div class="TextImgGroup">    {/* //in block-textimg.scss */}
        <div>
          <Headline3
          number = "02"
          subline = "Background"
          />
          <p>
            5 years of in-house agency experience at Meta Design Berlin & Landor 
            Mexico City. Self-employed since 2011, based in Berlin.
          </p>

          <ul class="dashed">
            <li>Developers Bootcamp, DBC, San Francisco (2014)</li>
            <li>MA International Business, ESCP-EAP, Berlin & Monterrey (2010)</li>
            <li>BA Product Design, Central Saint Martins College,  London (2007)</li>
          </ul>

        </div>

        <div></div>

        <div>
          <Headline3
          number = "03"
          subline = "Expertise"
          />
          <p>
            UX & UI (focus on UI), App Design, Web Design, Teaching
          </p>
        </div>

        <div></div>

        <div>
          <Headline3
          number = "04"
          subline = "Tools"
          />
          <p>
            Sketch, InVision, Flinto, Zeplin 
          </p>
        </div>

      <div></div>

      <div>
        <Headline3
        number = "05"
        subline = "Playing with"
        />
        <p>
        HTML, CSS & SASS,  React JS, jQuery
        </p>
      </div>

      </div>

   </div>
  </Layout>
)
export default About