import React from "react"
import PropTypes from "prop-types"
import "./header.css"

const Header = ({ firstName, lastName, phoneNum, email }) => (
  <header className="header">
    <div>
      <div className="name">
        <h1 className="first-name">{firstName}</h1>
        <h1 className="last-name">&nbsp;{lastName}</h1>
      </div>
      <div className="personal-info">
        <h4>{phoneNum}</h4>
        <h4>{email}</h4>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  phoneNum: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
  phoneNum: ``
}

export default Header
