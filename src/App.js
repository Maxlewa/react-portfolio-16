import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Loyd from './pages/Loyd'
import Contact from './pages/Contact'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './sass/app.sass'

export default function App() {

  return (
    <div>
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/loyd" exact component={Loyd}></Route>
          <Route path="/contact" exact component={Contact}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
