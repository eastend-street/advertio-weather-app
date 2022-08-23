import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.darkShadeCyan};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1rem;
  box-shadow: ${({ theme }) => theme.shadow.base};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.size5};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
`;
