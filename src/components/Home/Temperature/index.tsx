import React, { FC } from 'react';

import { TemperatureContainer, StyledTemperature } from './styles';
interface TemperatureProps {
  temperature: number;
  isFahrenheit: boolean;
}

const Temperature: FC<TemperatureProps> = ({ temperature, isFahrenheit }) => (
  <TemperatureContainer aria-label="temperature">
    <StyledTemperature>{Math.round(temperature)}</StyledTemperature>
    {isFahrenheit ? (
      <span aria-label="fahrenheit">&#176;F</span>
    ) : (
      <span aria-label="celsius">&#176;C</span>
    )}
  </TemperatureContainer>
);

export default Temperature;
