import styled from 'styled-components';

export const Container = styled.div`
  display: -webkit-flex; /* Safari */
  display: flex; /* Standard syntax */
  flex-wrap: wrap;
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    display: block;
    width: 33.3%;

    & :hover {
      background: ${props => props.theme.colors.inputBackground};
    }

    div {
      display: flex;
      padding: 1rem;
      border-radius: 10px;

      > span {
        font-weight: bold;
      }

      span {
        font-size: 4.6rem;
        display: flex;
        color: #ccc;
        min-width: 8rem;

        & + span {
          min-width: 20rem;
          flex-direction: column;
          justify-content: center;
          font-size: ${props => props.theme.font.sizes.md};

          margin-left: 1rem;

          strong {
            font-size: 2rem;
            font-weight: bold;
            color: ${props => props.theme.colors.text};
          }
        }
      }
    }
  }
`;
