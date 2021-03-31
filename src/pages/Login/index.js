import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container } from './styles';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSign() {
    const contentEmail = email.length > 0;
    const contentPassword = password.length > 0;

    if (!contentEmail && !contentPassword) {
      alert('Campos vazios');
      return;
    }

    alert('login');
  }
  return (
    <Container>
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/email.png`} width="25" alt="logo" />
        <h1>Welcome back!</h1>
      </div>
      <div className="boxBranco">
        <Input
          label="label"
          placeholder="Email address"
          type="type"
          onChange={(valor) => { setEmail(valor.target.value); }}
          value={email}
        />
        <Input
          label="label"
          placeholder="Password"
          type="password"
          onChange={(valor) => { setPassword(valor.target.value); }}
          value={password}
        />
        <Button
          onClick={handleSign}
          label="Login"
        />
      </div>
      <div className="rodape">
        <a href="https://google.com">Forgot your password?</a>
        <a href="https://google.com">Dont have an account? Get Started</a>
      </div>
    </Container>
  );
}

export default Login;
