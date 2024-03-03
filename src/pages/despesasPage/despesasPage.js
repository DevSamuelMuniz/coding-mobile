import React, { useState, useEffect } from "react";
import HeaderComponent from "../../components/header/HeaderComponent";
import DespesaComponent from "../../components/despesaComponent/despesaComponent";
import "./despesasPage.css";

function DespesasPage() {
  const [categoria, setCategoria] = useState("");
  const [valor, setValor] = useState("");
  const [despesas, setDespesas] = useState([]);
  const [totalDespesas, setTotalDespesas] = useState(0);

  // Função para recuperar as despesas armazenadas no localStorage
  useEffect(() => {
    const despesasFromStorage = JSON.parse(localStorage.getItem("despesas"));
    if (despesasFromStorage) {
      setDespesas(despesasFromStorage);
    }
  }, []);

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };

  const handleValorChange = (event) => {
    setValor(event.target.value);
  };

  const handleSubmit = () => {
    if (categoria.trim() !== "" && valor.trim() !== "") {
      const novaDespesa = {
        nomeDespesa: categoria,
        valorDespesa: parseFloat(valor),
      };
      setDespesas([...despesas, novaDespesa]);
      localStorage.setItem(
        "despesas",
        JSON.stringify([...despesas, novaDespesa])
      );
      setCategoria("");
      setValor("");
    }
  };

  const handleDeleteDespesa = (index) => {
    const novasDespesas = [...despesas];
    novasDespesas.splice(index, 1);
    setDespesas(novasDespesas);
    localStorage.setItem("despesas", JSON.stringify(novasDespesas));
  };

  useEffect(() => {
    const total = despesas.reduce(
      (acc, despesa) => acc + parseFloat(despesa.valorDespesa),
      0
    );
    setTotalDespesas(total);
  }, [despesas]);

  return (
    <main>
      <HeaderComponent />
      <div className="main-despesas">
        <div>
          <h1 className="despesah1">Despesas</h1>
        </div>

        <div className="total-despesas">
          <p>Total de Despesas: R$ {totalDespesas.toFixed(2)}</p>
        </div>

        <div>
          <h1 className="add-despesas">Adicionar Despesa</h1>
        </div>

        <div className="inputs">
          <input
            className="input"
            placeholder="Categoria"
            value={categoria}
            onChange={handleCategoriaChange}
          ></input>
          <input
            className="input"
            placeholder="Valor"
            value={valor}
            onChange={handleValorChange}
          ></input>
          <button className="btn-input" onClick={handleSubmit}>
            Adicionar Despesa
          </button>
        </div>

        <div>
          {despesas.map((despesa, index) => (
            <div key={index} className="despesa-item">
              <DespesaComponent
                nomeDespesa={despesa.nomeDespesa}
                valorDespesa={despesa.valorDespesa}
              />
              <button
                className="delete-btn"
                onClick={() => handleDeleteDespesa(index)}
              >
                Apagar
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default DespesasPage;
