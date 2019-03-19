/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            resume {
              basics {
                firstName,
                lastName,
                email,
                phone
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Header 
        firstName={data.site.siteMetadata.resume.basics.firstName} 
        lastName={data.site.siteMetadata.resume.basics.lastName}
        phoneNum={data.site.siteMetadata.resume.basics.phone}
        email={data.site.siteMetadata.resume.basics.email} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
