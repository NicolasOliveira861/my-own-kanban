import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 24px;

  h1,
  input {
    font-size: 2rem;
    line-height: 2.625rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black.text};
    display: inline-block;
  }

  input {
    width: 200px;
  }
`;
