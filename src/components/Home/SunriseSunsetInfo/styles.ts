import styled from 'styled-components';

export const SunriseSunsetInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 3rem 1rem 4rem;
`;

export const Sunrise = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.size2};
`;

export const Sunset = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.size2};
`;
