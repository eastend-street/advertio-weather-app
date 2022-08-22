import styled from 'styled-components';

export const SunriseSunsetInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0 4rem;
`;

export const Sunrise = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.size2};
  margin-right: 2rem;
`;

export const Sunset = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.size2};
`;
