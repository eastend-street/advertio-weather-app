import React from 'react';

import useWeatherApi from '../../hooks/useWeatherApi';
import { HomeContainer } from './styles';

const Home = () => {
  const { data } = useWeatherApi();

  return <HomeContainer>{data?.weather[0].description}</HomeContainer>;
};

export default Home;
