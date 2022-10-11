import React from "react";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import VModal from "./pages/vModalAchieve";
import cwAchieve from "./pages/computedAndWatch";
import FilterableProductTable from "./pages/FilterableProductTable/FilterableProductTable";
import testArea from './pages/testArea'
import { Button } from "antd";
// import { styles } from "./index.css";

export default function App() {
  return (
    <div>
      <Button />
      <div children={<h1>张慧龙是大傻叉 = stayHungry & stayFoolish</h1>}></div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <NavLink to="/home">to Home</NavLink>
        <NavLink to="/about">to About</NavLink>
        <NavLink to="/vMadal">to VModal</NavLink>
        <NavLink to="/cwAchieve">to cwAchieve</NavLink>
        <NavLink to="/filterableProductTable">to filterableProductTable</NavLink>
        <NavLink to="/testArea">to testArea</NavLink>

      </div>

      <hr />
      <h2>reactRouter context</h2>

      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/vMadal" component={VModal}></Route>
        <Route path="/cwAchieve" component={cwAchieve}></Route>
        <Route path="/filterableProductTable" component={FilterableProductTable}></Route>
        <Route path="/testArea" component={testArea}></Route>

        <Redirect to="/home"></Redirect>
      </Switch>
    </div>
  );
}
