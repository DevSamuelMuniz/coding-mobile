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
      
      </div>


      <div className="mapa">
        <h1 className="saldo">
          Nossa Agência
        </h1>
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.8917867329365!2d-34.878924246844996!3d-8.065678355974693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18a3179eebef%3A0x7caecfbcc5347f69!2sPorto%20Digital%20-%20NGPD%20(N%C3%BAcleo%20de%20Gest%C3%A3o%20do%20Porto%20Digital)!5e0!3m2!1spt-BR!2sbr!4v1712414869435!5m2!1spt-BR!2sbr" 
      width="99%" height="450" 
      allowFullScreen
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      title="Nossa Localização"></iframe>
      </div>
    </main>
  );
}

export default HomePage;
