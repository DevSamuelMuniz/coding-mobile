import "./saldoComponent.css"

const saldoAtual = 'R$ 1.849,23'

function SaldoComponent(){
    return(
        <main>
            <div className="saldo-content">
                <h1 className="saldo">Saldo Atual:</h1>
                <h2 className="dinheiro">{saldoAtual}</h2>
            </div>
        </main>
    );
}

export default SaldoComponent;