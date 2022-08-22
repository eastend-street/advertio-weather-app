import { ChangeEvent, useState } from 'react';
import useSWR from 'swr';
import axios, { AxiosResponse, AxiosError } from 'axios';

import { WeatherData } from 'types/weatherApi';

import { CITIES } from '../constants';
import { City } from '../types';

type UseWeatherApi = () => {
  data: WeatherData | undefined;
  error: AxiosError<Error> | undefined;
  selectedCity: City;
  handleSelectCity: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const fetcher = ({ url, selectedCity }: { url: string; selectedCity: City }) =>
  axios({
    method: 'GET',
    url,
    params: {
      appid: process.env.REACT_APP_WEATHER_API_KEY,
      q: selectedCity.name,
      units: 'metric',
    },
  }).then((res: AxiosResponse<WeatherData>) => res);

const useWeatherApi: UseWeatherApi = () => {
  const [selectedCity, setSelectedCity] = useState<City>(CITIES[0]);
  const { data: response, error } = useSWR<
    AxiosResponse<WeatherData>,
    AxiosError<Error>
  >(
    { url: 'https://api.openweathermap.org/data/2.5/weather', selectedCity },
    fetcher
  );

  const handleSelectCity = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedCity(
      CITIES.find((city) => city.id === Number(value)) || CITIES[0]
    );
  };

  return {
    data: response && response.data,
    error,
    selectedCity,
    handleSelectCity,
  };
};

export default useWeatherApi;
