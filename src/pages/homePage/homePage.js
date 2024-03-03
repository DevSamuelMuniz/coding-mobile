import "./homePage.css";
import React, { useState, useEffect } from "react";
import HeaderComponent from "../../components/header/HeaderComponent";
import SaldoComponent from "../../components/saldoComponent/saldoComponent";
import ButtonComponent from "../../components/buttons/buttonComponet";

function HomePage() {
 
  const [ganhos, setGanhos] = useState([]);
  const [despesas, setDespesas] = useState([]);
  const [totalGanhos, setTotalGanhos] = useState(0);
  const [totalDespesas, setTotalDespesas] = useState(0);

  useEffect(() => {
    const ganhosFromStorage = JSON.parse(localStorage.getItem("ganhos"));
    const despesasFromStorage = JSON.parse(localStorage.getItem("despesas"));

    if (ganhosFromStorage) {
      setGanhos(ganhosFromStorage);
    }

    if (despesasFromStorage) {
      setDespesas(despesasFromStorage);
    }
  }, []);

  
  useEffect(() => {
    const totalGanhos = ganhos.reduce(
      (acc, ganho) => acc + parseFloat(ganho.valorGanho),
      0
    );
    const totalDespesas = despesas.reduce(
      (acc, despesa) => acc + parseFloat(despesa.valorDespesa),
      0
    );

    setTotalGanhos(totalGanhos);
    setTotalDespesas(totalDespesas);
  }, [ganhos, despesas]);

  return (
    <main>
      <HeaderComponent />
      <SaldoComponent
        ganhosTotais={totalGanhos}
        despesasTotais={totalDespesas}
      />
      <div className="btn-comp">
        <ButtonComponent link={"/Ganhos"} titulo="Meus Ganhos" />
        <ButtonComponent link={"/Despesas"} titulo="Minhas Despesas" />
        {/* <ButtonComponent link={"/"} titulo="Meu Perfil" /> */}
      </div>
    </main>
  );
}

export default HomePage;
