import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  const value = "first"
  return (
    <div>
      <h1>Hello.</h1>
      <h2>This is a {value} look at Gatsby.</h2>
      <ul>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  )
}

export default IndexPage
