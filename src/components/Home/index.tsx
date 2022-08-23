import React, { FC } from 'react';

import Temperature from './Temperature';
import CityDropdown from './CityDropdown';
import UnitToggle from './UnitToggle';
import WeatherIcon from './WeatherIcon';
import SunriseSunsetInfo from './SunriseSunsetInfo';

import useWeatherApi from './hooks/useWeatherApi';

import {
  HomeContainer,
  ActionWrapper,
  ErrorMessage,
  LoadingMessage,
} from './styles';

const Home: FC = () => {
  const {
    data,
    error,
    selectedCity,
    isFahrenheit,
    handleSelectCity,
    handleSwitchUnit,
  } = useWeatherApi();

  return (
    <HomeContainer>
      <ActionWrapper>
        <CityDropdown
          selectedCity={selectedCity}
          onSelectCity={handleSelectCity}
        />
        <UnitToggle isFahrenheit={isFahrenheit} onToggle={handleSwitchUnit} />
      </ActionWrapper>
      {error ? (
        <ErrorMessage role="alert">
          Failed to load. Please try again.
        </ErrorMessage>
      ) : data ? (
        <>
          <Temperature
            temperature={data.main.temp}
            isFahrenheit={isFahrenheit}
          />
          <WeatherIcon weatherArray={data.weather} />
          <SunriseSunsetInfo
            sunrise={data.sys.sunrise}
            sunset={data.sys.sunset}
            selectedCity={selectedCity}
          />
        </>
      ) : (
        <LoadingMessage>Loading...</LoadingMessage>
      )}
    </HomeContainer>
  );
};

export default Home;
