import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 48px;
  min-height: 48px;
  margin-top: 32px;
  padding: 0 24px;
`;

export const FilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 32px;
  height: 100%;
  background: ${({ theme }) => theme.colors.purple.primary};
  gap: 8px;
  border-radius: 5px;

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #ffffff;
    text-shadow: 0px 4px 16px rgba(22, 22, 22, 0.1);
  }
`;
