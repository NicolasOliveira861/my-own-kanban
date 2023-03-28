import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 100%;
  margin-left: 16px;
  height: 100%;
`;

export const Bar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 24px;
  background: #fff;
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.1);
  border-radius: 8px;
  border: 0.7px solid #e3e3e3;
  margin: 0;

  input {
    width: 100%;
    height: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: ${({ theme }) => theme.colors.gray.primary};
    outline: none;
    margin-left: 10px;

    &::placeholder {
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      color: ${({ theme }) => theme.colors.gray.primary};
    }
  }
`;
