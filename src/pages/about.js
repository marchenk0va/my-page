import React from "react"

import "../styles/pages/about.scss"
import SEO from "../components/SEO"
import Layout from "../components/Layout"

const About = () => (
  <Layout>
    <SEO title="About Me" />
    <div className="container">
      <h1>About Me</h1>
      <div className="text">
        <p>I am Front-End developer from Wrocław</p>
        <p>
          Enjoy working with ReactJS (Hooks for the president). Currently
          practising in React Native,
          <br />
          Redux and GraphQL. Have experience working with Angular and NgRx
        </p>
        <p>
          Also I am last year student at University of Science and Technology,
          <br />
          course of Computer Science. On free time I am drawing and playing
          piano for fun :)
        </p>
      </div>
    </div>
  </Layout>
)

export default About
