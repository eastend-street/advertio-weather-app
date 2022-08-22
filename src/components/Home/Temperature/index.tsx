import React, { FC } from 'react';

import { TemperatureContainer } from './styles';

interface TemperatureProps {
  temperature: number;
  isFahrenheit: boolean;
}

const Temperature: FC<TemperatureProps> = ({ temperature, isFahrenheit }) => (
  <TemperatureContainer>
    <span>{Math.round(temperature)}</span>
    {isFahrenheit ? <span>&#8457;</span> : <span>&#8451;</span>}
  </TemperatureContainer>
);

export default Temperature;
