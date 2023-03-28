import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  margin-top: 32px;
  padding: 24px;
`;

export const Column = styled.section`
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    color: ${({ theme }) => theme.colors.black.text};
    margin-bottom: 24px;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow: initial auto;
  /* max-height: 400px; */
`;
