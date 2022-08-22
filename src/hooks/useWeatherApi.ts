import useSWR from 'swr';
import axios, { AxiosResponse, AxiosError } from 'axios';

import { WeatherData } from '../types/weatherApi';

type UseWeatherApi = () => {
  data: WeatherData | undefined;
  error: AxiosError<Error, any> | undefined;
};

const fetcher = () =>
  axios({
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather',
    params: {
      appid: process.env.REACT_APP_WEATHER_API_KEY,
      q: 'lisbon',
    },
  }).then((res: AxiosResponse<WeatherData>) => res);

const useWeatherApi: UseWeatherApi = () => {
  const { data: response, error } = useSWR<
    AxiosResponse<WeatherData>,
    AxiosError<Error>
  >('https://api.openweathermap.org/data/2.5/weather', fetcher);

  return {
    data: response && response.data,
    error,
  };
};

export default useWeatherApi;
