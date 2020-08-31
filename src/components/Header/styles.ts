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
  position: relative;
`;

export const Logo = styled.div`
  font-weight: bold;
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

export const HeaderContainerRight = styled.div`
  display: flex;
  align-items: center;
  button {
    background: transparent;
    color: ${props => props.theme.colors.textSecondary};
    outline: 0;
    border: 0;
    margin-right: 2rem;
  }
`;
