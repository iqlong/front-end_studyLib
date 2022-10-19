import React from "react";
import { NavLink, Route, Switch, Redirect, Link } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import VModal from "./pages/vModalAchieve/index.tsx";
import cwAchieve from "./pages/computedAndWatch/index.tsx";
import FilterableProductTable from "./pages/FilterableProductTable/FilterableProductTable/index.tsx";
import testArea from "./pages/testArea/index.tsx";
import AntDTest from "./pages/antd/test/index.tsx";

export default function App() {
  return (
    <div>
      <div>{<h1>张慧龙是大傻叉 = stayHungry & stayFoolish</h1>}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Link to="/home">to Home</Link>
        <NavLink to="/vMadal">to VModal</NavLink>
        <NavLink to="/reactRouterDom">to reactRouterDom</NavLink>
        <NavLink to="/filterableProductTable">
          to filterableProductTable
        </NavLink>
        <NavLink to="/testArea">to testArea</NavLink>
        <NavLink to="/antdTest">to antdTest</NavLink>
      </div>

      <hr />
      <h2>reactRouter context</h2>

      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/vMadal" component={VModal}></Route>
        <Route path="/reactRouterDom" component={cwAchieve}></Route>
        <Route
          path="/filterableProductTable"
          component={FilterableProductTable}
        ></Route>
        <Route path="/testArea" component={testArea}></Route>
        <Route to="/antdTest">
          <AntDTest></AntDTest>
        </Route>
        {/* 若是都没有匹配，那就跳转到 home 页面 */}
        <Redirect to="/home"></Redirect>
      </Switch>
    </div>
  );
}
