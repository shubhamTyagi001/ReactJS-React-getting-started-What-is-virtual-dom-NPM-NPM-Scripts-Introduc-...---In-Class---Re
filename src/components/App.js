import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  return (
    <div id="main">
    <div data-ns-test="project-name">Amazon</div>
      <div data-ns-test="project-description">Ecommerce</div>

      <div data-ns-test="project-name">Google</div>
      <div data-ns-test="project-description">Search Engine</div>
    </div>
  )
}


export default App;
