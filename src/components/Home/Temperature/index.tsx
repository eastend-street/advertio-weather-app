import React, { FC } from 'react';

import { TemperatureContainer, StyledTemperature } from './styles';
interface TemperatureProps {
  temperature: number;
  isFahrenheit: boolean;
}

const Temperature: FC<TemperatureProps> = ({ temperature, isFahrenheit }) => (
  <TemperatureContainer>
    <StyledTemperature>{Math.round(temperature)}</StyledTemperature>
    {isFahrenheit ? <span>&#176;F</span> : <span>&#176;C</span>}
  </TemperatureContainer>
);

export default Temperature;
