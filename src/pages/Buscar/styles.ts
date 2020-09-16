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
  padding-bottom: 1.5rem;

  mark {
    background: transparent;
    font-weight: bold;
    color: ${props => props.theme.colors.text};
  }

  @media (max-width: 425px) {
    border-bottom: 0;
    padding-bottom: 0;
    text-align: center;
  }
`;
