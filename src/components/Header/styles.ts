import styled from 'styled-components';
// import { shade } from 'polished';

export const Container = styled.div`
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
  input {
    flex: 1;
    min-width: 500px;
    height: 4rem;

    border-radius: 0.8rem;
    background: ${props => props.theme.colors.inputBackground};
    border: 1px solid ${props => props.theme.colors.lines};
    outline: 0;
    padding: 0 1.6rem;
    font-size: ${props => props.theme.font.sizes.md};
    font-family: ${props => props.theme.font.family};
    font-weight: 300;
  }
  @media (max-width: 1030px) {
    input {
      min-width: 300px;
    }
  }

  @media (max-width: 840px) {
    input {
      min-width: 200px;
    }
  }

  @media (max-width: 580px) {
    display: none;
  }
`;

export const MenuContainer = styled.div`
  display: block;

  ul {
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

      span {
        display: block;
        margin-top: 0.4rem;
      }

      &.activeMenu {
        color: ${props => props.theme.colors.primary};
      }

      &:hover {
        color: ${props => props.theme.colors.primary};
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
