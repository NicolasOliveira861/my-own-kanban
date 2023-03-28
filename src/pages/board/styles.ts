import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) => theme.colors.bg};
  padding: 48px 32px;
  border-radius: 32px 0 0 0;
  margin-top: 4px;
  position: relative;
`;
