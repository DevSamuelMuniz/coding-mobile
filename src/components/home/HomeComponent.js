import "./HomeComponent.css";
import React from "react";
import Seta from "../../assets/img/seta.png";

function HomeComponent() {
  const saldo = "0,00";

  return (
    <main className="home-main">
      <div className="content-saldo">
        <div className="saldo-atual">
          <h1>Saldo Atual</h1>
          <h2>R$ {saldo}</h2>
        </div>

        <div className="seta">
          <a href="/"><img className="seta-img" src={Seta} alt="seta" /></a>
        </div>
      </div>

      <div className="content-button">
        <button className="button">Calculadora</button>
        <button className="button">Despesas</button>
      </div>
    </main>
  );
}

export default HomeComponent;
