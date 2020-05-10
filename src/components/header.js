import React from "react"
import { Link } from "gatsby"

import logo from "../../static/temp-logo.png"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isBurgerActive: false }
    this.toggleBurger = this.toggleBurger.bind(this) // https://stackoverflow.com/a/33973745
  }

  toggleBurger() {
    const currentState = this.state.isBurgerActive
    this.setState({ isBurgerActive: !currentState })
  }

  render() {
    return (
      <nav className="navbar has-shadow is-spaced">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img src={logo} alt="logo" width="91" height="28" />
            </Link>
            <a
              role="button"
              className={`navbar-burger ${
                this.state.isBurgerActive ? "is-active" : ""
              }`}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={this.toggleBurger}
              onKeyDown={this.toggleBurger}
              tabIndex="0"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div
            id="navbarBasicExample"
            className={`navbar-menu ${
              this.state.isBurgerActive ? "is-active" : ""
            }`}
          >
            <div className="navbar-start">
              <Link className="navbar-item" activeClassName="is-active" to="/">
                Home
              </Link>
              <Link
                className="navbar-item"
                activeClassName="is-active"
                to="/blog"
              >
                Blog
              </Link>
              <Link
                className="navbar-item"
                activeClassName="is-active"
                to="/about"
              >
                About
              </Link>
              <Link
                className="navbar-item"
                activeClassName="is-active"
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
