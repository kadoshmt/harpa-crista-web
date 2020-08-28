import styled from 'styled-components';

export const Container = styled.main``;

export const ResultInfo = styled.div`
  font-size: ${props => props.theme.font.sizes.md};
  font-weight: 400;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.lines};
  padding-bottom: 1rem;
`;

export const AuthorsContainer = styled.div`
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
`;
