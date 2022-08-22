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
  isFahrenheit: boolean;
  handleSelectCity: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleSwitchUnit: () => void;
};

const fetcher = ({
  selectedCity,
  units,
}: {
  selectedCity: City;
  units: 'imperial' | 'metric';
}) =>
  axios({
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather',
    params: {
      appid: process.env.REACT_APP_WEATHER_API_KEY,
      q: selectedCity.name,
      units,
    },
  }).then((res: AxiosResponse<WeatherData>) => res);

const useWeatherApi: UseWeatherApi = () => {
  const [selectedCity, setSelectedCity] = useState<City>(CITIES[0]);
  const [isFahrenheit, setIsFahrenheit] = useState(false);
  const { data: response, error } = useSWR<
    AxiosResponse<WeatherData>,
    AxiosError<Error>
  >(
    {
      selectedCity,
      units: isFahrenheit ? 'imperial' : 'metric',
    },
    fetcher
  );

  const handleSelectCity = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedCity(
      CITIES.find((city) => city.id === Number(value)) || CITIES[0]
    );
  };

  const handleSwitchUnit = () => {
    setIsFahrenheit((prevState) => !prevState);
  };

  return {
    data: response && response.data,
    error,
    selectedCity,
    isFahrenheit,
    handleSelectCity,
    handleSwitchUnit,
  };
};

export default useWeatherApi;
