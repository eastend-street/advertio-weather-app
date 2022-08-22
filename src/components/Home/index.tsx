import React, { FC } from 'react';

import Temperature from './Temperature';
import CityDropdown from './CityDropdown';
import UnitToggle from './UnitToggle';
import WeatherIcon from './WeatherIcon';

import useWeatherApi from './hooks/useWeatherApi';

import { HomeContainer, ActionWrapper } from './styles';

const Home: FC = () => {
  const {
    data,
    selectedCity,
    isFahrenheit,
    handleSelectCity,
    handleSwitchUnit,
  } = useWeatherApi();

  return (
    <HomeContainer>
      {data && (
        <>
          <ActionWrapper>
            <CityDropdown
              selectedCity={selectedCity}
              onSelectCity={handleSelectCity}
            />
            <UnitToggle
              isFahrenheit={isFahrenheit}
              onToggle={handleSwitchUnit}
            />
          </ActionWrapper>
          <Temperature
            temperature={data.main.temp}
            isFahrenheit={isFahrenheit}
          />
          <WeatherIcon weatherArray={data.weather} />
        </>
      )}
    </HomeContainer>
  );
};

export default Home;
