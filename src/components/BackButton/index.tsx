import React, { ButtonHTMLAttributes, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  url?: string;
};

const BackButton: React.FC<ButtonProps> = ({ url = undefined, ...rest }) => {
  const history = useHistory();

  const handleClick = useCallback(() => {
    if (url) {
      history.push(url);
    } else {
      history.goBack();
    }
  }, [history, url]);
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
