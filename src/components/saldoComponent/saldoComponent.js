import "./saldoComponent.css";

function SaldoComponent({ ganhosTotais, despesasTotais }) {
    const saldoAtual = (ganhosTotais - despesasTotais).toFixed(2);

    return (
        <main>
            <div className="saldo-content">
                <h1 className="saldo">Saldo Atual:</h1>
                <h2 className="dinheiro">R$ {saldoAtual}</h2>
            </div>
        </main>
    );
}

export default SaldoComponent;
