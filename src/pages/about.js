import React from "react"

import { Layout } from "../components"
import AboutStyle from "./about.module.scss"

const AboutPage = () => {
  return (
    <Layout>
      <h1 className={AboutStyle.dodger}>About page</h1>
    </Layout>
  )
}

export default AboutPage
