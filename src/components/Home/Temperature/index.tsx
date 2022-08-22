import React, { FC } from 'react';

import { TemperatureContainer } from './styles';

interface TemperatureProps {
  temperature: number;
}

const Temperature: FC<TemperatureProps> = ({ temperature }) => (
  <TemperatureContainer>
    <span>{Math.round(temperature)}</span>
    <span>&#8451;</span>
  </TemperatureContainer>
);

export default Temperature;
