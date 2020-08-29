import styled from 'styled-components';

export const Container = styled.div`
  min-height: 200px;
  padding: 16px;

  background: ${props => props.theme.colors.backgroundSecondary};
  border-top: 1px solid ${props => props.theme.colors.lines};
  font-size: 2.8rem;
  display: flex;
  justify-content: center;
  align-content: center;
`;
