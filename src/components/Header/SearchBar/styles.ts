import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 100%;
  margin: 0 5rem;

  form {
    /* min-width: 500px; */
    width: 100%;
    display: flex;
    flex: 1;

    div {
      display: flex;
      flex: 1;
      justify-content: space-evenly;

      border-radius: 0.8rem 0 0 0.8rem;
      background: ${props => props.theme.colors.inputBackground};
      border: 1px solid ${props => props.theme.colors.lines};
      border-right: 0;
      outline: 0;
      padding-left: 1.6rem;      

      &:focus-within {
        border: 1px solid ${props => props.theme.colors.primary};
      }

      input[type='text'] {
        flex: 1;

        background: ${props => props.theme.colors.inputBackground};
        border: 0;
        height: 4rem;
        
        font-weight: 300;
        font-size: ${props => props.theme.font.sizes.lg};
      }
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
        border-color: ${props => props.theme.colors.primaryDark};
        > svg {
          color: ${props => props.theme.colors.textInPrimary};
        }
      }
    }
  }

  @media (max-width: 1030px) {
    /* form {
      min-width: 300px;
    } */
    margin: 0 2rem;
  }

  @media (max-width: 840px) {
    /* form {
      min-width: 240px;
      div {
        input[type='text'] {
          font-size: ${props => props.theme.font.sizes.sm};
        }
      }
    } */   
  }

  

  @media (max-width: 600px) {
    display: none;
    margin: 0;
    position: absolute;
    top: 48px;
    
    left: -16px;
    width: calc(100vw - 1.8rem); 
    height: 80px;
    padding: 2rem;
    background: ${props => props.theme.colors.backgroundSecondary};
    border-bottom: 1px solid ${props => props.theme.colors.lines};
  }

  @media (max-width: 425px) {    
    width: 100vw;
    left: 0px;  
    form{
      width: 96%;
    }
  }
`;
