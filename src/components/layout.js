import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
// import SwitchMode from "./toggle"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div style={{display: `flex`, justifyContent: `space-between`}}>
          <h1 style={{...scale(1.2), marginBottom: rhythm(1.5), marginTop: 0,}}>
            <Link style={{ boxShadow: `none`, textDecoration: `none`, color: `inherit`,}} to={`/`}>
              {title}
            </Link>
          </h1>
          {/* <SwitchMode /> */}
        </div>
      )
    } else {
      header = (
        <h3 style={{fontFamily: `Montserrat, sans-serif`,marginTop: 0,}}>
          <Link style={{ boxShadow: `none`, textDecoration: `none`, color: `inherit`,}} to={`/`}>
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div style={{ margin: `auto`, maxWidth: rhythm(24), padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,}}>
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout