import React from "react"

import { Layout } from "../components"
import "../styles/index.scss"

const IndexPage = () => {
  const value = "first"
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h1 className="title">Hello.</h1>
          <p className="content">Some content</p>
          <p>Some content</p>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
