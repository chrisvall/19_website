import React from "react"
import Header from '../components/Header';
import Layout from "../components/layout"
import Hero from "../components/hero"



const About = () => (
  <Layout>
    <div className="Margin">
        <Hero 
        headline1 = "This is me"
        headline2 = "Lorem ipsum dalur sorumg"
        skills="UI / UX / App / Web /  Freelance / Berlin"
        />
    </div>
  </Layout>
)
export default About