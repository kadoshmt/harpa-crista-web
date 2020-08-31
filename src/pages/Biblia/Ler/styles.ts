import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    margin-top: 3rem;
    margin-bottom: 2.5rem;
    /* border-bottom: 1px solid ${props => props.theme.colors.lines}; */
    padding-bottom: 1.5rem;
    text-align: center;
  }  

  @media (max-width: 425px) {
    h2 {
      text-align: center;
      border: 0;
    }
  }

  @media (max-width: 425px) {
    h1 {
      text-align: center;
    }
  }
`;

export const BookInfo = styled.dl`
  display: none;
`;

export const BookContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: row;

  justify-content: space-evenly;
  align-items: flex-start;

  a {
    margin-top: 20rem;

    border: 2px solid ${props => props.theme.colors.lines};
    border-radius: 50%;
    padding: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.2s;

    > svg {
      color: ${props => props.theme.colors.lines};
    }

    &:hover {
      border: 2px solid ${props => props.theme.colors.primary};

      > svg {
        color: ${props => props.theme.colors.primary};
      }
    }
  }

  @media (max-width: 610px) {
    a {
      margin-top: 0;
      padding: 0.3rem;
    }
  }
`;

export const ChapterContainer = styled.div`
  -webkit-column-count: 2; /* Chrome, Safari, Opera */
  -moz-column-count: 2; /* Firefox */
  column-count: 2; /* padrão */
  column-gap: 10rem;

  width: 100%;
  max-width: 94rem;
  margin: 0 auto;
  /* margin-top: 6rem; */

  p {
    line-height: 2.5rem;
    margin: 2rem 0;
    text-align: justify;

    &:first-child {
      margin: 0;
    }

    em {
      font-weight: bold;
    }
  }

  blockquote {
    font-weight: bold;
    margin-top: 3rem;
    margin-left: 3rem;
  }

  @media (max-width: 760px) {
    -webkit-column-count: 1; /* Chrome, Safari, Opera */
    -moz-column-count: 1; /* Firefox */
    column-count: 1; /* padrão */
    max-width: 42rem;

    margin: 0 auto;
    margin-top: 6rem;
  }
`;
