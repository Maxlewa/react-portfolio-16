import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './sass/app.sass'

export default function App() {

  return (
    <div>
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          {/* <Route path="/about" exact component={About}></Route>
          <Route path="/contact" exact component={Contact}></Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  )
}
