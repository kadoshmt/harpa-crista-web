import styled from 'styled-components';

export const Container = styled.button`
  font-size: ${props => props.theme.font.sizes.lg};
  width: 10rem;
  height: 4rem;
  border: 0;
  background: transparent;

  display: flex;
  align-items: center;

  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  > svg {
    margin-right: 0.5rem;
  }

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;
