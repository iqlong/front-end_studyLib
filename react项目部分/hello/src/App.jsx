import React from 'react';
import { NavLink, Route, Switch, Redirect} from "react-router-dom";
import About from './pages/About/About'
import Home from './pages/Home/Home'
import { Button } from 'antd'

export default function App() {
  return (
    <div className="allRoute">
      <Button />
      <div children={<h1>张慧龙是大傻叉 = stayHungry & stayFoolish</h1>}></div>
      <NavLink to='/home'>to Home</NavLink>
        <hr/>
      <NavLink to='/about'>to About</NavLink>
      <Switch>
          <Route path='/home' component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Redirect to='/home' ></Redirect>
      </Switch>

    </div>
  )
}
