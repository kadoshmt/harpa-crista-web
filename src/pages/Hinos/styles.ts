import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
`;

export const MainContent = styled.main`
  max-width: 1280px;
  width: 94%;
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

  @media (max-width: 510px) {
    width: 90%;
  }

  @media (max-width: 425px) {
    width: 100%;
    border: 0;
    margin-top: 64px;
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
        }
      }
    }
  }

  @media (max-width: 456px) {
    margin-bottom: 2rem !important;
    ul {
      li {
        margin: 0 0.5rem;
      }
    }
  }

  @media (max-width: 380px) {
    ul {
      li {
        margin: 0;
        a {
          padding: 0.5rem 0.8rem;
        }
      }
    }
  }
`;
