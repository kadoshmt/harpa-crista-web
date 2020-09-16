import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 425px) {
    h1 {
      text-align: center;
    }
  }
`;

export const ResultInfo = styled.summary`
  font-size: ${props => props.theme.font.sizes.md};
  font-weight: 400;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.lines};
  padding-bottom: 1rem;

  mark {
    background: transparent;
    font-weight: bold;
    color: ${props => props.theme.colors.text};
  }

  @media (max-width: 425px) {
    border-bottom: 0;
    margin-top: 1rem;
    text-align: center;
  }
`;

export const HymnsContainer = styled.section``;
