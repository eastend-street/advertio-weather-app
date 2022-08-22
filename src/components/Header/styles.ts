import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.darkShadeCyan};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  margin: 0;
`;
