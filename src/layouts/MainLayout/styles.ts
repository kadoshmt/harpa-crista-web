import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  margin: 0 auto;
`;

export const Container = styled.main`
  max-width: 1280px;
  width: 94%;
  margin: 0 auto;
  margin-top: 1.4rem;
  padding: 3rem;

  background: ${props => props.theme.colors.mainContent};
  border: 1px solid ${props => props.theme.colors.lines};
  border-radius: 10px;
  min-height: calc(100vh - (1.4rem * 2) - (64px * 2));

  h1 {
    margin-bottom: 1.6rem;
    color: ${props => props.theme.colors.primary};
    border-left: 4px solid ${props => props.theme.colors.primary};
    padding-left: 2rem;
  }

  @media (max-width: 510px) {
    width: 90%;
  }

  @media (max-width: 425px) {
    width: 100%;
    border: 0;
    margin-top: 64px;
    padding: 2rem;

    h1 {
      border-left: 0px solid ${props => props.theme.colors.primary};
      padding-left: 0;
      font-size: 2.6rem;
    }
  }
`;
