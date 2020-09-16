import styled from 'styled-components';

export const Container = styled.nav`
  display: -webkit-flex; /* Safari */
  display: flex; /* Standard syntax */
  margin: 3rem 0;
  justify-content: center;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    display: block;
    font-weight: bold;

    span {
      font-size: ${props => props.theme.font.sizes.md};
      display: flex;
      padding: 1rem 2.5rem;
      text-align: center;
      align-items: center;
      border-bottom: 3px solid ${props => props.theme.colors.background};
      transition: all 0.3s;
    }

    &.activeMenu {
      span {
        color: ${props => props.theme.colors.primary};
        border-bottom: 3px solid ${props => props.theme.colors.primary};
      }
    }

    & :hover {
      color: ${props => props.theme.colors.primary};
      border-bottom: 3px solid ${props => props.theme.colors.primary};
    }
  }

  @media (max-width: 600px) {
    a {
      padding: 1rem 1rem;
    }
  }

  @media (max-width: 470px) {
    a {
      padding: 0;

      span {
        height: 40px;
        padding: 1rem 1.5rem;
      }
    }
  }

  @media (max-width: 380px) {
    a {
      padding: 0;

      &.activeMenu {
        span {
          color: ${props => props.theme.colors.primary};
          border-top: 0;
        }
      }

      span {
        padding: 1rem 1rem;
        border-left: 1px solid ${props => props.theme.colors.lines};
        border-top: 1px solid ${props => props.theme.colors.lines};

        &.last-span {
          border-right: 1px solid ${props => props.theme.colors.lines};
        }
      }
    }
  }

  @media (max-width: 330px) {
    a {
      padding: 0;

      span {
        padding: 1rem 0.5rem;
      }
    }
  }
`;
