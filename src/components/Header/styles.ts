import styled from 'styled-components';
// import { shade } from 'polished';

export const Container = styled.header`
  height: 64px;
  padding: 16px;
  background: ${props => props.theme.colors.background};
  border-bottom: 1px solid ${props => props.theme.colors.lines};
  font-size: 2.8rem;
  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 425px) {
    position: fixed;
    width: 100vw;
    padding-left: 0;
  }
`;

export const HeaderContent = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-weight: bold;
`;

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

        > svg {
          color: ${props => props.theme.colors.textInPrimary};
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

export const MenuContainer = styled.nav`
  display: block;

  menu {
    list-style: none;
    display: flex;

    li a {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: ${props => props.theme.font.sizes.md};
      font-family: ${props => props.theme.font.family};
      text-decoration: none;
      color: ${props => props.theme.colors.textSecondary};
      font-weight: bold;
      /* transition: all 0.3s; */

      span {
        display: block;
        margin-top: 0.4rem;
      }

      &.activeMenu {
        color: ${props => props.theme.colors.primary};
      }

      &:hover {
        color: ${props => props.theme.colors.primary};
        > svg {
          color: ${props => props.theme.colors.primary} !important;
        }
      }
    }
  }

  li + li {
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuBurguerContainer = styled.div`
  display: none;
  height: 64px;
  @media (max-width: 768px) {
    display: block;
  }
`;
