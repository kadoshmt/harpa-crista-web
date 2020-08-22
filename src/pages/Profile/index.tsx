import React, { useCallback, useRef, ChangeEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';


import { Container } from './styles';
import api from '../../services/api';


import { useAuth } from '../../hooks/auth';


const Profile: React.FC = () => { 
  const history = useHistory();

  const { user, updateUser } = useAuth();

  const handleSubmit = useCallback(() => {}, [],
  );

  const handleAvatarChange = useCallback(()=> {},[],
  );

  return (
    <Container>     
      <h1>Perfil</h1>
    </Container>
  );
};

export default Profile;
