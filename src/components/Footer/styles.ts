import styled from 'styled-components';

export const Container = styled.div`
  height: 64px;
  padding: 16px;

  background: ${props => props.theme.colors.headerBackground};
  border-top: 1px solid ${props => props.theme.colors.lines};
  font-size: 2.8rem;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 1.4rem;
`;
