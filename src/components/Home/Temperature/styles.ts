import styled from 'styled-components';

export const TemperatureContainer = styled.p`
  font-size: 5rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
  margin: 1rem auto;
`;

export const StyledTemperature = styled.span`
  margin-right: 0.5rem;
`;
