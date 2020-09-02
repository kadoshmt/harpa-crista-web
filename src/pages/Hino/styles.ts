import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    text-align: center;
  }

  h2 {
    text-align: center;
    color: ${props => props.theme.colors.textSecondary};
  }
`;

export const ResultInfo = styled.summary`
  font-size: ${props => props.theme.font.sizes.md};
  font-weight: 400;
  margin: 0 auto;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.lines};
  padding-bottom: 1rem;
  text-align: center;
  width: 100%;
  max-width: 94rem;
`;

export const HymnContainer = styled.section`
  width: 100%;
  margin: 0 auto;

  min-height: 500px;

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

  @media (max-width: 425px) {
    align-items: flex-start;
    a {
      padding: 0.3rem;

      top: 84px;
      &.prevButton {
        left: 1rem;
      }

      &.nextButton {
        right: 1rem;
      }
    }
  }
`;

export const HymnBody = styled.article`
  -webkit-column-count: 2; /* Chrome, Safari, Opera */
  -moz-column-count: 2; /* Firefox */
  column-count: 2; /* padrão */

  width: 100%;
  max-width: 94rem;
  margin: 0 auto;
  margin-top: 6rem;

  > p {
    line-height: 2.5rem;
    margin: 2rem 0;

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
    margin: 0 auto;
    margin-top: 6rem;
  }

  @media (max-width: 425px) {
    margin-top: 1rem;
    p {
      text-align: center;
      font-size: ${props => props.theme.font.sizes.xl};
    }
  }
`;
