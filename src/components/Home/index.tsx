import React, { FC } from 'react';

import useWeatherApi from '../../hooks/useWeatherApi';
import Temperature from './Temperature';
import { HomeContainer } from './styles';

const Home: FC = () => {
  const { data } = useWeatherApi();

  return (
    <HomeContainer>
      {data && <Temperature temperature={data.main.temp} />}
    </HomeContainer>
  );
};

export default Home;
