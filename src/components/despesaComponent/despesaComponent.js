import "./despesaComponent.css";

function DespesaComponent({valorDespesa, nomeDespesa}) {
  return (
    <main className="despesas-content">
      <h2>{nomeDespesa}</h2>
      <h3>R$ {valorDespesa}</h3>
    </main>
  );
}

export default DespesaComponent;
