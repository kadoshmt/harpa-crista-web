import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
`;

export const MainContent = styled.main`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  margin-top: 1.4rem;
  padding: 3rem;

  background: ${props => props.theme.colors.mainContent};
  border: 1px solid ${props => props.theme.colors.lines};
  border-radius: 10px;
  min-height: 85vh;

  h1 {
    margin-bottom: 1.6rem;
    color: ${props => props.theme.colors.primary};
    border-left: 4px solid ${props => props.theme.colors.primary};
    padding-left: 2rem;
  }

  h2 {
    margin-top: 3rem;
    margin-bottom: 2.5rem;
    border-bottom: 1px solid ${props => props.theme.colors.lines};
    padding-bottom: 1.5rem;
  }

  h3 {
    font-size: ${props => props.theme.font.sizes.md};
    font-weight: 400;
    margin-bottom: 2.5rem;
    border-bottom: 1px solid ${props => props.theme.colors.lines};
    padding-bottom: 1.5rem;
  }

  @media (max-width: 510px) {
    width: 90%;
  }

  @media (max-width: 425px) {
    width: 100%;
    border: 0;
    margin-top: 64px;

    h2 {
      text-align: center;
      border: 0;
    }
  }
`;

export const BookContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: row;

  justify-content: space-evenly;
  align-items: center;

  a {
    border: 2px solid ${props => props.theme.colors.lines};
    border-radius: 50%;
    padding: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;

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
`;

export const ChapterContainer = styled.div`
  -webkit-column-count: 2; /* Chrome, Safari, Opera */
  -moz-column-count: 2; /* Firefox */
  column-count: 2; /* padrão */
  column-gap: 10rem;

  width: 100%;
  max-width: 94rem;
  margin: 0 auto;
  margin-top: 6rem;

  p {
    line-height: 2.5rem;
    margin: 2rem 0;
    text-align: justify;

    &:first-child {
      margin: 0;
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
    border: 1px solid red;
    margin: 0 auto;
    margin-top: 6rem;
  }
`;
