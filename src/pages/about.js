import React from "react"

import { Layout } from "../components"
import AboutStyle from "./about.module.scss"

const AboutPage = () => {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h1 className={`${AboutStyle.dodger} title`}>About page</h1>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
