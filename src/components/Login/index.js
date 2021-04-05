import React from 'react';

import { Container } from './styles';

import Button from '../Button';
import Input from '../Input';

function Login() {
  return (
    <Container>
      <Input
        placeholder="Email"
        type="text"
      />
      <Input
        placeholder="Password"
        type="password"
      />
      <Button
        label="Login"
      />
    </Container>
  );
}

export default Login;
