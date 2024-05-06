import React from "react";
import "../css/navbar.css";
import logo from "../images/dev.webp";

export default function Navbar() {
  return (
    <div>
      <nav id="topnav">
        <div className="left">
          <img src={logo} alt="" />{" "}
          <span style={{ color: "rgb(163 137 207)" }}>Narshi</span>
          <span style={{ color: "#7cb87c" }}> Dev </span>
          <span style={{ color: "#ad7b7b" }}>Portfolio</span>
        </div>
      </nav>
    </div>
  );
}
