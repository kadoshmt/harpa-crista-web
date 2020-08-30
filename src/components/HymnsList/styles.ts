import styled from 'styled-components';

export const Container = styled.section`
  display: -webkit-flex; /* Safari */
  display: flex; /* Standard syntax */
  flex-wrap: wrap;
`;

export const Hymn = styled.article`
  width: 33.3%;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    display: block;

    p {
      display: flex;
      padding: 1rem;
      color: ${props => props.theme.colors.textSecondary};

      span {
        font-weight: bold;
        color: ${props => props.theme.colors.lines};
        font-size: 4.6rem;
        min-width: 8rem;
      }

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: ${props => props.theme.font.sizes.md};
        font-weight: normal;

        margin-left: 1rem;

        strong {
          font-size: 2rem;
          font-weight: normal;
          color: ${props => props.theme.colors.text};
        }
      }
    }

    & :hover {
      background: ${props => props.theme.colors.inputBackground};

      span,
      div,
      strong {
        color: ${props => props.theme.colors.primary} !important;
      }
    }
  }

  @media (max-width: 1030px) {
    width: 50%;
  }

  @media (max-width: 700px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    border-top: 1px solid ${props => props.theme.colors.lines};
  }
`;
