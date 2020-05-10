import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className="footer">
      <div className="container">
        <p>
          Created by {data.site.siteMetadata.author}, ©{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer
