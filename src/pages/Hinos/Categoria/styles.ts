import styled from 'styled-components';

export const Container = styled.main`
  h2 {
    margin-top: 2rem;
  }
`;

export const ResultInfo = styled.div`
  font-size: ${props => props.theme.font.sizes.md};
  font-weight: 400;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.lines};
  padding-bottom: 1rem;
`;

export const HymnContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: row;

  justify-content: space-evenly;
  align-items: center;
`;

export const HymnsContainer = styled.div`
  -webkit-column-count: 2; /* Chrome, Safari, Opera */
  -moz-column-count: 2; /* Firefox */
  column-count: 2; /* padrão */

  width: 100%;
  max-width: 94rem;
  margin: 0 auto;
  margin-top: 6rem;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};

    &:hover {
      color: ${props => props.theme.colors.primary};
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
