import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {

  return (
    <>
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li className="is-active"><a href="#" aria-current="page">Dashboard</a></li>
        </ul>
      </nav>
      <section>
        <div className="tile is-ancestor has-text-centered">
          <div className="tile is-parent">
            <article className="tile is-child box notification is-primary">
              <p className="title">439k</p>
              <p className="subtitle">Users</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box notification is-warning">
              <p className="title">59k</p>
              <p className="subtitle">Products</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box notification is-info">
              <p className="title">3.4k</p>
              <p className="subtitle">Open Orders</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box notification is-danger">
              <p className="title">19</p>
              <p className="subtitle">Exceptions</p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
