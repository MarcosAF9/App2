import React, { useState } from 'react';

import { Container } from './styles';

import Button from '../Button';
import Input from '../Input';

function Cadastro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  function handleSingUp() {
    const contentEmail = email.length > 0;
    const contentPassword = password.length > 0;
    const contentConfirmPass = confirmPass.length > 0;
    if (!contentEmail || !contentPassword || !contentConfirmPass) {
      alert('Os campos estão vazios');
    } else if (password !== confirmPass) {
      alert('As senhas inseridas são diferentes!');
    }
  }
  return (
    <Container>
      <Input
        placeholder="Email"
        type="text"
        onChange={(valor) => { setEmail(valor.target.value); }}
        value={email}
      />
      <Input
        placeholder="Password"
        type="password"
        onChange={(valor) => { setPassword(valor.target.value); }}
        value={password}
      />
      <Input
        placeholder="Confirm password"
        type="password"
        onChange={(valor) => { setConfirmPass(valor.target.value); }}
        value={confirmPass}
      />
      <Button
        label="Cadastrar"
        onClick={handleSingUp}
      />
    </Container>
  );
}

export default Cadastro;
