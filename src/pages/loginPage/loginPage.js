import "./loginPage.css";
import React, { useState } from "react";
import Logo from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom"; // Importe useNavigate

//firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/Principal");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="content-login">
      <div>
        <img className="img-logo" src={Logo} alt="" />
      </div>

      <div>
        <form onSubmit={handleSubmit} className="form">
          <input
            className="form-input"
            type="email"
            placeholder="Seu Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="form-input"
            type="password"
            placeholder="Sua Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

          <button className="btn-entrar" type="submit">
            Entrar
          </button>
        </form>
        <div className="outros">
          <p>
            Não possui conta?{" "}
            <a className="cadastro" href="/Cadastro">
              Cadastre-se
            </a>
          </p>
          <p>
            Esqueceu sua senha?{" "}
            <a className="cadastro" href="/">
              Recuperar
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
