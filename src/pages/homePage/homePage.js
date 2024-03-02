import "./homePage.css";
import React from "react";

import HeaderComponent from "../../components/header/HeaderComponent";
import SaldoComponent from "../../components/saldoComponent/saldoComponent";
import ButtonComponent from "../../components/buttons/buttonComponet";

function HomePage() {
  return (
    <main>
      <HeaderComponent />
      <SaldoComponent />
      <div className="btn-comp">
        <ButtonComponent link={"/"} titulo="Minhas Despesas" />
        <ButtonComponent link={"/"} titulo="Meus Ganhos" />
        <ButtonComponent link={"/"} titulo="Meu Perfil" />
      </div>
    </main>
  );
}

export default HomePage;
