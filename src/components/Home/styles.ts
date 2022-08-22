import styled from 'styled-components';

export const HomeContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  padding: 1rem 2rem;
  max-width: ${({ theme }) => theme.contentMaxWidth};
`;

export const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.5rem 0 4rem;
`;
