import styled from 'styled-components';

export const Container = styled.section`
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
        color: ${props => props.theme.colors.text};
        padding: 0.5rem 1rem;
        transition: all 0.3s;

        &.activeMenu {
          color: ${props => props.theme.colors.primary};
          border-bottom: 3px solid ${props => props.theme.colors.primary};
        }

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
