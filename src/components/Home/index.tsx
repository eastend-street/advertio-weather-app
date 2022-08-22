import React, { FC } from 'react';

import Temperature from './Temperature';
import CityDropdown from './CityDropdown';
import UnitToggle from './UnitToggle';

import useWeatherApi from './hooks/useWeatherApi';

import { HomeContainer } from './styles';

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
          <CityDropdown
            selectedCity={selectedCity}
            onSelectCity={handleSelectCity}
          />
          <UnitToggle isFahrenheit={isFahrenheit} onToggle={handleSwitchUnit} />
          <Temperature
            temperature={data.main.temp}
            isFahrenheit={isFahrenheit}
          />
        </>
      )}
    </HomeContainer>
  );
};

export default Home;
