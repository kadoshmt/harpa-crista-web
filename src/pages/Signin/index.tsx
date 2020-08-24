import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';
import { useAuth } from '../../hooks/auth';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(() => {}, []);
  return (
    <Container>
      <h1>Autenticar</h1>
    </Container>
  );
};

export default SignIn;
