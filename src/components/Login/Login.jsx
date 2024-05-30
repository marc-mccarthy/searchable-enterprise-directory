import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Content,
  Form,
  Input,
  Label,
  TellMe,
  TellMeButton,
  TellMeSubmit,
} from './Login.styled';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const checkUser = async () => {
    if (username && password) {
      const user = { username, password };
      const response = await axios.post('/login', user);
      return response.data;
    } else {
      alert('Missed a field');
    }
  };

  const login = (event) => {
    event.preventDefault();
    checkUser().then((response) => {
      console.log(response);
      if (response.length === 0) {
        alert('No one goes by that language round here');
        setUsername('');
        setPassword('');
      } else {
        navigate(`/home/${response[0].employee_no}`);
      }
    });
  }; // end login

  const guest = (event) => {
    event.preventDefault();
    navigate(`/home/0`);
  }; // end guest

  return (
    <Form onSubmit={login}>
      <h3>Login</h3>
      <Content>
        <TellMe>
          <Label htmlFor='username'>
            Username:
            <Input
              type='text'
              name='username'
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Label>
          <Label htmlFor='password'>
            Password:
            <Input
              type='password'
              name='password'
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Label>
        </TellMe>
        <TellMeSubmit>
          <TellMeButton onClick={guest}>Guest</TellMeButton>
          <TellMeButton>Login</TellMeButton>
        </TellMeSubmit>
      </Content>
    </Form>
  );
}

export default LoginForm;
