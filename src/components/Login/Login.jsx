import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Content,
  Form,
  TellMeButton,
  TellMeSubmit
} from './Login.styled';

function LoginForm() {
  const navigate = useNavigate();

  const guest = (event) => {
    event.preventDefault();
    navigate(`/home/0`);
  }; // end guest

  return (
    <Form>
      <h2>Login as a Guest</h2>
      <Content>
        <TellMeSubmit>
          <TellMeButton onClick={guest}>Guest</TellMeButton>
        </TellMeSubmit>
      </Content>
    </Form>
  );
}

export default LoginForm;
