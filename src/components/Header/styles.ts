import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.darkShadeCyan};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  margin: 0;
`;
