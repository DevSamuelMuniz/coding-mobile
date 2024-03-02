import "./HeaderComponent.css";
import React from "react";
import Logo from "../../assets/img/logo.png";

function HeaderComponent() {
  return (
    <main className="main">
      <img className="logo" src={Logo} alt="" />
    </main>
  );
}

export default HeaderComponent;
