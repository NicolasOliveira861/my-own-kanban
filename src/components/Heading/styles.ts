import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  display: inline-block;
  width: fit-content;
  margin-right: 24px;

  img {
    height: 64px;
    width: 64px;
    border-radius: 250px;
    object-fit: cover;
    display: block;
  }
`;
