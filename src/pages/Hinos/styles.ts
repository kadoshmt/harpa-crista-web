import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
`;

export const MainContent = styled.main`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  margin-top: 1.4rem;
  padding: 3rem;

  background: ${props => props.theme.colors.mainContent};
  border: 1px solid ${props => props.theme.colors.lines};
  border-radius: 10px;
  min-height: 85vh;

  h1 {
    margin-bottom: 1.6rem;
    color: ${props => props.theme.colors.primary};
    border-left: 4px solid ${props => props.theme.colors.primary};
    padding-left: 2rem;
  }
`;

export const HymnsPagination = styled.div`
  display: flex;
  justify-content: center;

  ul {
    list-style: none;
    display: flex;

    li {
      margin: 0 1rem;
      display: flex;

      a {
        text-decoration: none;
        font-weight: bold;
        color: ${props => props.theme.colors.secundary};
        padding: 0.5rem 1rem;

        &:hover {
          color: ${props => props.theme.colors.primary};
          text-decoration: underline;
        }
      }
    }
  }
`;
