import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import Button from '../../components/Button';
import Cadastro from '../../components/Cadastro';
import Login from '../../components/Login';

import { Container } from './styles';

function Inicial() {
  const [hide, setHide] = useState(false);
  return (
    <Container>
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/email.png`} width="25" alt="logo" />
        <h1>Welcome back!</h1>
      </div>
      <div className="boxBranco">
        {!hide ? <Login /> : <Cadastro />}
      </div>

      <div className="rodape">
        <a href="https://google.com">Forgot your password?</a>
        <button className="botao" type="button" onClick={() => setHide(() => !hide)}>
          {' '}
          Don&apos;t have an account?
          {' '}
          <strong>Get Started</strong>
        </button>
      </div>
    </Container>
  );
}

export default Inicial;
