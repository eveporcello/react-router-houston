import React from 'react'
import { render } from 'react-dom'
import './index.css'

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import {
  Home,
  Vans,
  Contact,
  Whoops404
} from './pages'

render(
  <BrowserRouter>
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/vans" component={Vans} />
        <Redirect from="/star-wars" to="/vans/star-wars" />
        <Redirect from="/snake-and-wolf" to="/vans/snake-and-wolf" />
        <Route path="/contact" component={Contact} />
        <Route component={Whoops404} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
