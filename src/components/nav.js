import React from 'react'
import { NavLink, Link, useHistory } from 'react-router-dom'

import auth from '../common/auth'
import logo from '../images/logo.png'
import { themes } from '../config'
import { changeTheme } from '../common/util'

export default function Nav() {
  const [isNavbarShown, setNavbarShown] = React.useState(false)
  const history = useHistory()

  function logout() {
    auth.signout().then(() => {
      history.push('/login')
    })
  }

  return (
    <nav className="navbar has-shadow is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item brand-text" to="/">
          Bulma Admin
        </Link>
        <a
          onClick={() => setNavbarShown((val) => !val)}
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        className={`navbar-menu${isNavbarShown ? ' is-active' : ''}`}>
        <div className="navbar-start">
          <NavLink
            activeClassName="is-active"
            className="navbar-item is-tab"
            to="/">
            <span className="icon is-medium"><i className="fa fa-home"></i></span>
            Home
          </NavLink>
          <Link
            className="navbar-item is-tab"
            to="/about">
            About
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Themes
            </a>
            <div className="navbar-dropdown is-boxed">
              <div className="columns">
                <div className="column">
                  {themes.slice(0, themes.length / 2).map(theme => {
                    return <a className="navbar-item" href="#" key={theme}
                      onClick={(e) => {
                        e.preventDefault()
                        changeTheme(theme)
                      }}
                      style={{ textTransform: 'capitalize' }}> {theme} </a>
                  })}
                </div>
                <div className="column">
                  {themes.slice(themes.length / 2).map(theme => {
                    return <a className="navbar-item" href="#" key={theme}
                      onClick={(e) => {
                        e.preventDefault()
                        changeTheme(theme)
                      }}
                      style={{ textTransform: 'capitalize' }}> {theme} </a>
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              <figure className="image is-32x32">
                <img
                  alt="avatar"
                  className="is-rounded"
                  src={logo}
                  style={{ maxHeight: 'none' }}/>
              </figure>
              <span>&nbsp;by.Genesis</span>
            </a>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to="/about">
                <span className="icon is-small"><i className="fa fa-user"></i></span>
                &nbsp; Profile
              </Link>
              <hr className="navbar-divider"/>
              <a onClick={logout} className="navbar-item">
                <span className="icon is-small"><i className="fa fa-power-off"></i></span>
                &nbsp; Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

