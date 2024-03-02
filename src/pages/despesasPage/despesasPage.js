import "./despesasPage.css";

import HeaderComponent from "../../components/header/HeaderComponent";
import DespesaComponent from "../../components/despesaComponent/despesaComponent";

function DespesasPage() {
  return (
    <main>
      <HeaderComponent />
      <div className="main-despesas">
        <div>
          <h1 className="despesah1">Despesas</h1>
        </div>
        <div>
          <a className="add-despesas" href="/">Adicionar Despesa</a>
        </div>
        <DespesaComponent nomeDespesa={"Netflix"} valorDespesa={"R$ 40,00"} />
        <DespesaComponent nomeDespesa={"Eletricidade"} valorDespesa={"R$ 120,00"} />
        <DespesaComponent nomeDespesa={"Internet"} valorDespesa={"R$ 60,00"} />
        <DespesaComponent nomeDespesa={"Aguá"} valorDespesa={"R$ 30,00"} />
        <DespesaComponent nomeDespesa={"Telefone"} valorDespesa={"R$ 45,00"} />
        <DespesaComponent nomeDespesa={"Transporte"} valorDespesa={"R$ 70,00"} />
        <DespesaComponent nomeDespesa={"Comida"} valorDespesa={"R$ 90,00"} />
        <DespesaComponent nomeDespesa={"Academia"} valorDespesa={"R$ 120,00"} />
        <DespesaComponent nomeDespesa={"Transporte Público"} valorDespesa={"R$ 60,00"} />
        <DespesaComponent nomeDespesa={"Presentes"} valorDespesa={"R$ 80,00"} />
        <DespesaComponent nomeDespesa={"Assinatura de Revista"} valorDespesa={"R$ 25,00"} />
        <DespesaComponent nomeDespesa={"Gás de Cozinha"} valorDespesa={"R$ 50,00"} />

      </div>
    </main>
  );
}

export default DespesasPage;
