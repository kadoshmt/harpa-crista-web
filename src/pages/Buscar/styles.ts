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
`;
