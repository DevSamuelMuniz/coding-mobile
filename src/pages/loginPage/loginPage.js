import "./loginPage.css";
import React from "react";
import Logo from "../../assets/img/logo.png";

function LoginPage() {
  return (
    <div className="content-login" >
      <div>
        <img className="img-logo" src={Logo} alt="" />
      </div>

      <div>
        <form className="form">
          <input className="form-input" type="text" placeholder="Email ou nome de usuário" />
          <input className="form-input" type="password" placeholder="Senha" />
          <button className="btn-entrar" type="submit">Entrar</button>
        </form>
    <div className="outros">
        <p>
            Não possui conta? <a href="/">Cadastre-se</a>
          </p>
          <p>
            Esqueceu sua senha? <a href="/">Recuperar</a>
          </p>
      </div>
    </div>
    </div>
  );
}

export default LoginPage;
