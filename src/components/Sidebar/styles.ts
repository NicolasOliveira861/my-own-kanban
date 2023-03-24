import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 32px 35px;
  max-width: 175px;
  height: 100%;
  background: transparent;
`;

export const Links = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-top: 60px;
`;

export const Link = styled(RouterLink)`
  display: flex;
  align-items: center;
  text-decoration: none;

  p {
    margin-left: 16px;
    font-weight: 700;
    font-size: 16px;
    line-height: 125%;
    color: #ffffff;
  }
`;
