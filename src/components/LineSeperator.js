import styled from 'styled-components';

export const Line = styled.div`
  height: 20px;
  width: ${({ width }) => width};
  border-bottom: 3px solid ${({ color }) => color};
  margin-bottom: 48px;
`;