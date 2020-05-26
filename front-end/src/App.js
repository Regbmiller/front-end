import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Route, Link } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./components/Home";
import StuDash from "./components/Dashboards/StuDash";

import { fetchCategories } from "./actions/categories";

import "./App.css";

function App(props) {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <ProtectedRoute exact path="/student" component={StuDash} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = {
   fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
