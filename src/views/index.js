import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Nav from '../components/nav'
import Menu from '../components/menu'
import Dashboard from './dashboard'
import Posts from './posts'

export default function Login() {

  return (
    <>
      <Nav/>
      <div className="section">
        <div className="columns">
          <div className="column is-2">
            <Menu/>
          </div>
          <div className="column is-10">
            <Switch>
              <Route path="/posts">
                <Posts/>
              </Route>
              <Route path="/">
                <Dashboard/>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  )
}
