/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
// pages

import LandingPage from "views/LandingPage.js";
import AboutPage from "views/AboutPage.js";
import ProjectsPage from "views/ProjectsPage.js";
import HobbiesPage from "views/HobbiesPage.js";
// others

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/index" render={(props) => <LandingPage {...props} />} />
      <Route path="/about" render={(props) => <AboutPage {...props} />} />
      <Route path="/projects" render={(props) => <ProjectsPage {...props} />} />
      <Route path="/hobbies" render={(props) => <HobbiesPage {...props} />} />
      <Redirect to="/index" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
