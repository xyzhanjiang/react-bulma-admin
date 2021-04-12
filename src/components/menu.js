import React from 'react'
import {
  NavLink
} from 'react-router-dom'

export default function Menu() {
  return (
    <aside className="menu">
      <p className="menu-label">
        General
      </p>
      <ul className="menu-list">
        <li>
          <NavLink
            activeClassName="is-active"
            exact
            to="/">
            <span className="icon is-small">
              <i className="fas fa-chart-bar"></i>
            </span> Dashboard
          </NavLink>
        </li>
      </ul>
      <p className="menu-label">
        Administration
      </p>
      <ul className="menu-list">
        <li>
          <NavLink
            activeClassName="is-active"
            to="/posts">
            <span className="icon is-small">
              <i className="fa fa-table"></i>
            </span> Posts
          </NavLink>
        </li>
      </ul>
    </aside>
  )
}

