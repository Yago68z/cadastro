import React from 'react';
import './App.css';

function App() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">cadastro</h1>

        <label className="login-label">Nome:</label>
        <input type="text" className="login-input" />
        
        <label className="login-label">Email:</label>
        <input type="text" className="login-input" />
        
        <label className="login-label">Senha:</label>
        <input type="password" className="login-input" />

        <div className="options-row">
          <label className="checkbox-container">
            <input type="checkbox" />
            <span>salvar cadastro</span>
          </label>
          <a href="#" className="forgot-password">..</a>
        </div>

        <button className="login-button">Cadastrar</button>

        <div className="social-login">
          <p className="social-text">Logar com</p>
          <div className="icons">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" alt="Google" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Github" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" />
          </div>
          <p className="signup-text">
            já tem conta? <a href="#" className="signup-link">Entrar</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
