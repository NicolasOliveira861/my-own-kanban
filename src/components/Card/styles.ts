import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 16px #eae2fd;
  border-radius: 8px;
  max-height: 153px;
  max-width: 320px;
  padding: 24px;

  h2 {
    color: ${({ theme }) => theme.colors.black.text};
    font-weight: 700;
    font-size: 14px;
    line-height: 130%;
  }

  p {
    color: ${({ theme }) => theme.colors.gray.secondary};
    font-weight: 500;
    font-size: 14px;
    line-height: 130%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Tags = styled.div`
  display: flex;
  gap: 8px;
`;

export const Tag = styled.span`
  display: block;
  padding: 4px 8px;
  background: ${({ theme }) => theme.colors.purple.secondary};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.purple.primary};
  font-weight: 500;
  font-size: 11px;
  line-height: 130%;
`;
