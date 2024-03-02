import "./cadastroPage.css";
import React from "react";
import Logo from "../../assets/img/logo.png";

function redirectLogin(){
  window.location.href = "/";
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
              placeholder="Nome de Usuário"  
              />

          <input
            className="form-input"
            type="email"
            placeholder="Seu Email"
            />

          <input 
            className="form-input" 
            type="password" 
            placeholder="Sua Senha" 
            />

          <input
            className="form-input"
            type="password"
            placeholder="Confirmar Senha"
            />

          <button 
          className="btn-entrar" 
          type="button" onClick={redirectLogin}>
            Cadastrar
          </button>

        </form>
        <div className="outros">
          <a className="cadastro" href="/">Voltar</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
