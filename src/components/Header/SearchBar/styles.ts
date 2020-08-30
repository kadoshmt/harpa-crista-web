import styled from 'styled-components';

export const SearchContainer = styled.div`
  form {
    min-width: 500px;

    div {
      display: flex;
      justify-content: space-evenly;

      border-radius: 0.8rem;
      background: ${props => props.theme.colors.inputBackground};
      border: 1px solid ${props => props.theme.colors.lines};
      outline: 0;
      padding-left: 1.6rem;
      font-family: ${props => props.theme.font.family};
      font-weight: 300;

      &:focus-within {
        border: 1px solid ${props => props.theme.colors.primary};
      }

      input[type='text'] {
        flex: 1;
        background: ${props => props.theme.colors.inputBackground};
        border: 0;
        height: 4rem;
        font-size: ${props => props.theme.font.sizes.lg};
      }
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${props => props.theme.colors.primary};
        border: 1px solid ${props => props.theme.colors.primary};
        border-radius: 0 0.8rem 0.8rem 0;
        width: 4.4rem;
        transition: all 0.3s;

        > svg {
          color: ${props => props.theme.colors.textInPrimary};
        }

        &:hover {
          background: ${props => props.theme.colors.primaryDark};
        }
      }
    }
  }

  @media (max-width: 1030px) {
    form {
      min-width: 300px;
    }
  }

  @media (max-width: 840px) {
    form {
      min-width: 240px;
      div {
        input[type='text'] {
          font-size: ${props => props.theme.font.sizes.sm};
        }
      }
    }
  }

  @media (max-width: 580px) {
    display: none;
  }
`;
