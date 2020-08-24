import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
`;

export const HeaderContent = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  margin-top: 1.4rem;
  padding: 3rem;

  display: flex;

  background: ${props => props.theme.colors.mainContent};
  border: 1px solid ${props => props.theme.colors.lines};
  border-radius: 10px;
  min-height: 85vh;
`;
