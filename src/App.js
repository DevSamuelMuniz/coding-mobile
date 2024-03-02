import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage/loginPage";
import CadastroPage from "./pages/cadastroPage/cadastroPage";
import HomePage from "./pages/homePage/homePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Cadastro" element={<CadastroPage />} />
        <Route path="/Principal" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;