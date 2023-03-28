import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 24px;

  #hide {
    opacity: 0;
    position: absolute;
    pointer-events: none;
  }

  #hide,
  input {
    font-size: 2rem;
    line-height: 2.625rem;
    font-weight: 700;
  }

  input {
    color: ${({ theme }) => theme.colors.black.text};
    display: flex;
    outline: none;
    transition: 0.3s border-bottom;
    border-bottom: 1px solid transparent;
    pointer-events: none;
    text-align: left;
    min-width: 5ch;

    &.editing {
      pointer-events: all;
      border-bottom: 1px solid ${({ theme }) => theme.colors.black.text};
    }
  }
`;
