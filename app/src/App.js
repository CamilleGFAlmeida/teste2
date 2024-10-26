// Cadastro.jsx
import React from "react";
import "./App.css";
import signUpImg from "./img/signUp.svg";

const App = () => {
  return (
    <main className="card-container slideUp-animation">
      <div className="image-container">
        <h1 className="company">
          OnEat<sup>&trade;</sup>
        </h1>
        <img src={signUpImg} className="illustration" alt="Ilustração de Cadastro" />
        <p className="quote">Crie o seu perfil e comece a fazer suas compras!</p>
      
      </div>
      <form>
        <div className="form-container slideRight-animation">
          <h1 className="form-header">Criar Conta</h1>
          <div className="input-container">
            <label htmlFor="mail">E-mail</label>
            <input type="email" name="mail" id="mail" placeholder="Digite seu e-mail" />
          </div>
          <div className="input-container">
            <label htmlFor="user-password">Senha</label>
            <input type="password" name="user-password" id="user-password" placeholder="Digite sua senha" />
          </div>
          <div className="input-container">
            <label htmlFor="confirm-user-password">Confirme sua senha</label>
            <input type="password" name="confirm-user-password" id="confirm-user-password" placeholder="Confirme a sua senha" />
          </div>
          <div id="btm">
            <a href="./index2.html"><button type="button" className="submit-btn">Próximo</button></a>
            <p className="btm-text">
              Já tem uma conta? <a href="../cadastro-login/login.html"><span className="btm-text-highlighted">Faça o login</span></a>
            </p>
          </div>
        </div>
      </form>
    </main>
  );
};

export default App;
