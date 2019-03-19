import React from "react";
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Text from "./text/text"
import "./summary.css"

const Summary = () => (
  <StaticQuery
    query={graphql`
    query SummaryQuery {
      site {
        siteMetadata {
          resume {
            basics {
              summary
            }
          }
        }
      }
    }
    `}
    render={data => (
      <div className="summary">
        <Text text={data.site.siteMetadata.resume.basics.summary} />
      </div>
    )}
  />
)

export default Summary