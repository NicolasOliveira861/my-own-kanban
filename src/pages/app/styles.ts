import styled from 'styled-components';

export const Container = styled.main`
  background: ${({ theme }) => theme.colors.purple.primary};
  width: 100%;
  min-height: 100%;
  height: fit-content;
  display: flex;
`;
