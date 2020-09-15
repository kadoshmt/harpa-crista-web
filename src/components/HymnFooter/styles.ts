import styled from 'styled-components';

export const Container = styled.section`
  height: 54px;
  padding: 16px;
  background: ${props => props.theme.colors.backgroundSecondary};
  /* border-top: 1px solid ${props => props.theme.colors.lines}; */
  display: none;
  justify-content: space-between;
  align-content: center;

  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    width: 100%;

    li {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 30%;

      div {
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          font-size: ${props => props.theme.font.sizes.md};
        }
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        background: ${props => props.theme.colors.backgroundSecondary};
        color: ${props => props.theme.colors.primary};
        border: 0;
      }
    }

    li.navigation {
      width: 40%;
    }
  }

  @media (max-width: 425px) {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100vw;
    padding-left: 0;
  }
`;
