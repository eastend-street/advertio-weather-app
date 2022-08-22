import React, { FC } from 'react';

import { TemperatureContainer, StyledTemperature } from './styles';

interface TemperatureProps {
  temperature: number;
  isFahrenheit: boolean;
}

const Temperature: FC<TemperatureProps> = ({ temperature, isFahrenheit }) => (
  <TemperatureContainer>
    <StyledTemperature>{Math.round(temperature)}</StyledTemperature>
    <span>{isFahrenheit ? 'ºF' : 'ºC'}</span>
  </TemperatureContainer>
);

export default Temperature;
