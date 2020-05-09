import React from "react"

import { Layout } from "../components"
import '../styles/index.scss'

const IndexPage = () => {
  const value = "first"
  return (
    <Layout>
      <p className="content">Some content</p>
      <p>Some content</p>
    </Layout>
  )
}

export default IndexPage
