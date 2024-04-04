import "./loginPage.css";
import React, { useState } from "react";
import Logo from "../../assets/img/logo.png";
import { useNavigate } from 'react-router-dom'; // Importe useNavigate

//firebase
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../services/firebaseConfig";


function LoginPage() {
  const navigate = useNavigate(); // Use useNavigate para navegação programática

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  function handleSignIn(e){
    e.preventDefault();
    signInWithEmailAndPassword(email, password)
      .then(() => {
          navigate('/Principal');
        }
    )
  }
  

  if(loading) {
    return <p>carregando...</p>
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
            type="text"
            placeholder="Email do usuário"
            onChange={(e) => setEmail(e.target.value)}

          />
          <input 
            className="form-input" 
            type="password" 
            placeholder="Senha" 
            onChange={(e) => setPassword(e.target.value)}
            />

          <button 
            className="btn-entrar" 
            type="button"
            onClick={handleSignIn}>
            Entrar
          </button>
          
        </form>
        <div className="outros">
          <p>
            Não possui conta? <a className="cadastro" href="/Cadastro">Cadastre-se</a>
          </p>
          <p>
            Esqueceu sua senha? <a className="cadastro" href="/">Recuperar</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
