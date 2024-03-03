import React, { useState, useEffect } from "react";
import HeaderComponent from "../../components/header/HeaderComponent";
import DespesaComponent from "../../components/despesaComponent/despesaComponent";
import "./ganhosPage.css";

function GanhosPage() {
  const [categoria, setCategoria] = useState("");
  const [valor, setValor] = useState("");
  const [ganhos, setGanhos] = useState([]);
  const [despesas, setDespesas] = useState([]);
  const [totalGanhos, setTotalGanhos] = useState(0);
  const [setTotalDespesas] = useState(0);

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

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };

  const handleValorChange = (event) => {
    setValor(event.target.value);
  };

  const handleSubmit = () => {
    if (categoria.trim() !== "" && valor.trim() !== "") {
      const novoGanho = { nomeGanho: categoria, valorGanho: parseFloat(valor) };
      setGanhos([...ganhos, novoGanho]);
      localStorage.setItem("ganhos", JSON.stringify([...ganhos, novoGanho]));
      setCategoria("");
      setValor("");
    }
  };

  const handleDeleteGanhos = (index) => {
    const novosGanhos = [...ganhos];
    novosGanhos.splice(index, 1);
    setGanhos(novosGanhos);
    localStorage.setItem("ganhos", JSON.stringify(novosGanhos));
  };

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
      <div className="main-despesas">
        <div>
          <h1 className="despesah1">Ganhos</h1>
        </div>
        <div className="total-despesas">
          <p>Total de ganhos: R$ {totalGanhos.toFixed(2)}</p>
        </div>
        <div>
          <h1 className="add-despesas">Adicionar Ganhos</h1>
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
            Adicionar ganhos
          </button>
        </div>

        <div>
          {ganhos.map((ganho, index) => (
            <div key={index} className="despesa-item">
              <DespesaComponent
                nomeDespesa={ganho.nomeGanho}
                valorDespesa={ganho.valorGanho}
              />
              <button
                className="delete-btn"
                onClick={() => handleDeleteGanhos(index)}
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

export default GanhosPage;
