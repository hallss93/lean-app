import React, { useState } from 'react';
import InputMask from 'react-input-mask';

import './Form.css';

function Form() {
  const [nome, setNome] = useState("");
  const [nomeValid, setNomeValid] = useState(true);

  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);

  const [cpf, setCPF] = useState("");
  const [cpfValid, setCPFValid] = useState(true);

  const [telefone, setTelefone] = useState("");
  const [telefoneValid, setTelefoneValid] = useState(true);

  const small = (valid, message) => {
    return valid ? <div></div> : <small className="validate-error">{message}</small>
  }
  function Validate() {
    if (nomeValid && emailValid && cpfValid && telefoneValid) {
      alert("valido")
    }
  }

  function submitValidate(event) {
    event.preventDefault();
    let valid = true
    setNomeValid(true);
    setEmailValid(true);
    setCPFValid(true);
    setTelefoneValid(true);
    
    if (nome.length < 6) {
      setNomeValid(false);
      valid = false;
    }
    if (email.length < 6) {
      setEmailValid(false);
      valid = false;
    }
    if (cpf.length < 14) {
      setCPFValid(false);
      valid = false;
    }
    if (telefone.length < 15) {
      setTelefoneValid(false);
      valid = false;
    }
    if (!valid) return false
    Validate()
  }

  function beforeMaskedValueChange(newState, oldState, userInput) {
    var { value } = newState;
    var selection = newState.selection;
    var cursorPosition = selection ? selection.start : null;

    // keep minus if entered by user
    if (value.endsWith('-') && userInput !== '-' && !cpf.endsWith('-')) {
      if (cursorPosition === value.length) {
        cursorPosition--;
        selection = { start: cursorPosition, end: cursorPosition };
      }
      value = value.slice(0, -1);
    }

    return {
      value,
      selection
    };
  }
  return (
    <div className="form">
      <h1>Lean Cadastro</h1>
      <form>
        <div className="form-itens">
          <div className="form-item">
            <label>Nome Completo</label>
            <input
              type='text'
              name='nome'
              onChange={e => setNome(e.target.value)}
            />
            {small(nomeValid, 'Digite um Nome válido!')}
          </div>
          <div className="form-item">
            <label>E-mail</label>
            <input
              type='text'
              name='email'
              onChange={e => setEmail(e.target.value)}
            />
            {small(emailValid, 'Digite um E-mail válido!')}
          </div>
          <div className="form-item">
            <label>CPF</label>
            <InputMask mask="999.999.999-99"
              maskChar={null}
              name="cpf"
              onChange={e => setCPF(e.target.value)}
              beforeMaskedValueChange={beforeMaskedValueChange} />
            {small(cpfValid, 'Digite um CPF válido!')}
          </div>
          <div className="form-item">
            <label>Telefone</label>
            <InputMask mask="(99) 99999-9999"
              name="telefone"
              maskChar={null}
              onChange={e => setTelefone(e.target.value)}
              beforeMaskedValueChange={beforeMaskedValueChange} />
            {small(telefoneValid, 'Digite um Telefone válido!')}
          </div>
          <div className="form-item">
            <button onClick={submitValidate}>Cadastrar</button>
            <label>Login</label>
          </div>
        </div>

      </form>
    </div>
  );
}

export default Form;
