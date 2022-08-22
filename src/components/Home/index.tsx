import React, { FC } from 'react';

import Temperature from './Temperature';
import CityDropdown from './CityDropdown';

import useWeatherApi from './hooks/useWeatherApi';

import { HomeContainer } from './styles';

const Home: FC = () => {
  const { data, selectedCity, handleSelectCity } = useWeatherApi();

  return (
    <HomeContainer>
      {data && (
        <>
          <CityDropdown
            selectedCity={selectedCity}
            onSelectCity={handleSelectCity}
          />
          <Temperature temperature={data.main.temp} />
        </>
      )}
    </HomeContainer>
  );
};

export default Home;
