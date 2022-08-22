import React, { FC } from 'react';

import { Weather } from 'types/weatherApi';
import { WeatherIconContainer, WeatherImage } from './styles';

interface WeatherIconProps {
  weatherArray: Weather[];
}

const WeatherIcon: FC<WeatherIconProps> = ({ weatherArray }) => (
  <WeatherIconContainer>
    {weatherArray.map((weather) => (
      <WeatherImage
        src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt={weather.description}
      />
    ))}
  </WeatherIconContainer>
);

export default WeatherIcon;
