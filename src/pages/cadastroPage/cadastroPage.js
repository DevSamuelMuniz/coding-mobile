import "./cadastroPage.css";
import React, { useState } from "react";
import Logo from "../../assets/img/logo.png";

//auth firebase
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../services/firebaseConfig";

function redirectLogin(){
  window.location.href = "/";
}

function CadastroPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [
    createUserWithEmailAndPassword, user, loading, error] =
     useCreateUserWithEmailAndPassword(auth);

  function handleSignOut(e){
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  }

  if(loading){
    return <p>Carregando...</p>
  }

  if(user){
    console.log(user)
  }

  return (
    <div className="content-login">
      <div>
        <img className="img-logo" src={Logo} alt="" />
      </div>

      <div>
        <form className="form">
          <input
            className="form-input"
            type="email"
            placeholder="Seu Email"
            onChange={(e) => setEmail(e.target.value)}
            />

          <input 
            className="form-input" 
            type="password" 
            placeholder="Sua Senha" 
            onChange={(e) => setPassword(e.target.value)}
            />

          <button 
          className="btn-entrar" 
          type="button" onClick={handleSignOut}>
            Cadastrar
          </button>


          <div className="outros">
            <a className="cadastro" href="/">Voltar</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CadastroPage;
