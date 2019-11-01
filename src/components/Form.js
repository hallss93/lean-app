import React from 'react';
import './Form.css';

function Form() {
  return (
    <div className="form">
      <h1>Lean Cadastro</h1>
      <div className="form-itens">
        <div className="form-item">
          <label>Nome Completo</label>
        </div>
        <div className="form-item">
          <label>E-mail</label>
        </div>
        <div className="form-item">
          <label>CPF</label>
        </div>
        <div className="form-item">
          <label>Telefone</label>
        </div>
        <div className="form-item">
          <button>Cadastrar</button>
          <label>Login</label>
        </div>
      </div>
    </div>
  );
}

export default Form;
