import React, { useState } from "react";
import "./saldoComponent.css";
import som from "../../assets/audio/som.mp3"; 

function SaldoComponent({ ganhosTotais, despesasTotais }) {
  const saldoAtual = (ganhosTotais - despesasTotais).toFixed(2);

  const [audio] = useState(new Audio(som));

  const playAudio = () => {
    audio.play();
  };

  return (
    <main>
      <div className="saldo-content">
        <h1 className="saldo">Saldo Atual:</h1>
        <h2 className="dinheiro">R$ {saldoAtual}</h2>
        <button className="audio" onClick={playAudio} id="playButton">
          Reproduzir Áudio
        </button>
      </div>
    </main>
  );
}

export default SaldoComponent;
