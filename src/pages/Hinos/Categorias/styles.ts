import styled from 'styled-components';

export const Container = styled.div``;

export const ResultInfo = styled.summary`
  font-size: ${props => props.theme.font.sizes.md};
  font-weight: 400;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.lines};
  padding-bottom: 1rem;

  mark {
    background: transparent;
    font-weight: bold;
  }

  @media (max-width: 425px) {
    border-bottom: 0;
    padding-bottom: 0;
    text-align: center;
  }
`;

export const CategoriesContainer = styled.section`
  -webkit-column-count: 3; /* Chrome, Safari, Opera */
  -moz-column-count: 3; /* Firefox */
  column-count: 3; /* padrão */

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    line-height: 2.4rem;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }

  @media (max-width: 1080px) {
    -webkit-column-count: 2; /* Chrome, Safari, Opera */
    -moz-column-count: 2; /* Firefox */
    column-count: 2; /* padrão */
  }

  @media (max-width: 760px) {
    -webkit-column-count: 1; /* Chrome, Safari, Opera */
    -moz-column-count: 1; /* Firefox */
    column-count: 1; /* padrão */
  }

  @media (max-width: 425px) {
    a {
      border-top: 1px solid ${props => props.theme.colors.lines};
      display: block;
    }
  }
`;

export const Category = styled.article`
  @media (max-width: 425px) {
    padding: 1.2rem 0;
    font-size: ${props => props.theme.font.sizes.xl};
  }
`;
