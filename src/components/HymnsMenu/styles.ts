import styled from 'styled-components';

export const Container = styled.div`
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
    }
  }

  @media (max-width: 390px) {
    a {
      padding: 0;

      span {
        height: 80px;
      }
    }
  }
`;
