import styled from 'styled-components';
// import { shade } from 'polished';

export const Container = styled.div`
  height: 64px;
  padding: 16px;
  background: ${props => props.theme.colors.headerBackground};
  border-bottom: 1px solid ${props => props.theme.colors.lines};
  font-size: 2.8rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export const HeaderContent = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchContainer = styled.div`
  input {
    width: 500px;
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
`;

export const MenuContainer = styled.div`
  ul {
    list-style: none;
    display: flex;

    li > a {
      display: flex;      
      flex-direction: column;
      align-items: center;
      font-size: ${props => props.theme.font.sizes.md};
      font-family: ${props => props.theme.font.family};
      text-decoration: none;
      color: ${props => props.theme.colors.headerIcons};

      span {
        display:block;
        margin-top: 0.4rem;
      }

      &:hover {
        color: ${props => props.theme.colors.headerActiveIcons};
      }
      
      }
    }

    li + li {
      margin-left: 20px;
    }
  }
`;
