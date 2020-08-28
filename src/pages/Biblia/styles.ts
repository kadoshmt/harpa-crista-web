import styled from 'styled-components';

export const Container = styled.main`
  h2 {
    margin-top: 3rem;
    margin-bottom: 2.5rem;
    border-bottom: 1px solid ${props => props.theme.colors.lines};
    padding-bottom: 1.5rem;
  }

  @media (max-width: 425px) {
    /* width: 100%;
    border: 0;
    margin-top: 64px; */

    h2 {
      text-align: center;
      border: 0;
      font-size: 2.4rem;
      font-weight: 700;
    }
  }
`;

export const BooksContainer = styled.div`
  -webkit-column-count: 5; /* Chrome, Safari, Opera */
  -moz-column-count: 5; /* Firefox */
  column-count: 5; /* padrão */

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    line-height: 2.4rem;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }

  @media (max-width: 1080px) {
    -webkit-column-count: 4; /* Chrome, Safari, Opera */
    -moz-column-count: 4; /* Firefox */
    column-count: 4; /* padrão */
  }

  @media (max-width: 840px) {
    -webkit-column-count: 3; /* Chrome, Safari, Opera */
    -moz-column-count: 3; /* Firefox */
    column-count: 3; /* padrão */
  }

  @media (max-width: 580px) {
    -webkit-column-count: 2; /* Chrome, Safari, Opera */
    -moz-column-count: 2; /* Firefox */
    column-count: 2; /* padrão */
  }

  @media (max-width: 425px) {
    -webkit-column-count: 1; /* Chrome, Safari, Opera */
    -moz-column-count: 1; /* Firefox */
    column-count: 1; /* padrão */
    font-size: ${props => props.theme.font.sizes.xl};

    a {
      padding: 2rem 0;
      display: block;
      text-align: center;
      border-top: 1px solid ${props => props.theme.colors.lines};

      &:last-child {
        border-bottom: 1px solid ${props => props.theme.colors.lines};
      }
    }
  }
`;
