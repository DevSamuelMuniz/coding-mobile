import "./loginPage.css";
import React from "react";
import Logo from "../../assets/img/logo.png";

function principalPage() {
  window.location.href = "/Principal";
}

function LoginPage() {
  return (
    <div className="content-login">
      <div>
        <img className="img-logo" src={Logo} alt="" />
      </div>

      <div>
        <form className="form">
          <input
            className="form-input"
            type="text"
            placeholder="Email ou nome de usuário"
          />
          <input className="form-input" type="password" placeholder="Senha" />
          <button onClick={principalPage} className="btn-entrar" type="button">
            Entrar
          </button>
        </form>
        <div className="outros">
          <p>
            Não possui conta? <a className="cadastro" href="/Cadastro">Cadastre-se</a>
          </p>
          <p>
            Esqueceu sua senha? <a className="cadastro" href="/Esqueceu-a-Senha">Recuperar</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
