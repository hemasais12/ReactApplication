import React from "react";
import "./leftbar.css";

function Leftbar() {
  return (
    <nav className=  "main-nav sidebar" >
      <div className="nav-left">
        <div className="side-link">
          <ul className="sideList" >
            <a href="#">text 1</a>
          </ul>
          <ul className="sideList">
            <a href="#">text 2</a>
          </ul>
          <ul className="sideList">
            <a href="#">text 3</a>
          </ul>
          <ul className="sideList">
            <a href="#">text 4</a>
          </ul>
          <ul className="sideList" >
            <a href="#">text 1</a>
          </ul>
          <ul className="sideList">
            <a href="#">text 2</a>
          </ul>
          <ul className="sideList">
            <a href="#">text 3</a>
          </ul>
          <ul className="sideList">
            <a href="#">text 4</a>
          </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default Leftbar;
