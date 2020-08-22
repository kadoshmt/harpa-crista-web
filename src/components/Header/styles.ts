import styled from 'styled-components';

export const Container = styled.div`
  height: 64px;
  padding: 16px;
  background: ${props => props.theme.colors.headerBackground};
  border-bottom: 1px solid #ddd;
  font-size: 2.8rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;
