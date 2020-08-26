import React, { ButtonHTMLAttributes, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  url?: string;
};

const BackButton: React.FC<ButtonProps> = ({ ...rest }) => {
  const { goBack } = useHistory();

  const handleClick = useCallback(() => {
    goBack();
  }, [goBack]);
  return (
    <Container
      data-testid="backbutton-container"
      type="button"
      onClick={handleClick}
      {...rest}
    >
      <FiArrowLeftCircle size={18} /> Voltar
    </Container>
  );
};

export default BackButton;
