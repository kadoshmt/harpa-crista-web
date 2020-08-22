import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container } from './styles';
import api from '../../services/api';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const history = useHistory();

  const handleSubmit = useCallback(() => {}, []);
  return (
    <Container>
      <h1>Cadastrar</h1>
    </Container>
  );
};

export default SignUp;
