import "./homePage.css";
import React from "react";

import HeaderComponent from "../../components/header/HeaderComponent";
import SaldoComponent from "../../components/saldoComponent/saldoComponent";
import ButtonComponent from "../../components/buttons/buttonComponet";


function HomePage({totalGanhos, totalDespesas }) {

  const [totalGanhos, setTotalGanhos] = useState(0);


  useEffect(() => {
    const totalGanhos = ganhos.reduce((acc, ganho) => acc + parseFloat(ganho.valorGanho), 0);
    const totalDespesas = despesas.reduce((acc, despesa) => acc + parseFloat(despesa.valorDespesa), 0);
    
    setTotalGanhos(totalGanhos);
    setTotalDespesas(totalDespesas);
    
    // If necessary, you can store the totalGanhos and totalDespesas in localStorage here
}, [ganhos, despesas]);

  return (
     <main>
       <HeaderComponent />
       <SaldoComponent ganhosTotais={totalGanhos} despesasTotais={totalDespesas} />
       <div className="btn-comp">
         <ButtonComponent link={"/Despesas"} titulo="Minhas Despesas" />
         <ButtonComponent link={"/Ganhos"} titulo="Meus Ganhos" />
         <ButtonComponent link={"/"} titulo="Meu Perfil" />
       </div>
     </main>
  );
 }
 
 export default HomePage;
 