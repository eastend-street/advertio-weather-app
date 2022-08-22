import React, { FC } from 'react';
import * as dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import { Sys } from 'types/weatherApi';
import { City } from '../types';
import { SunriseSunsetInfoContainer, Sunrise, Sunset } from './styles';

interface SunriseSunsetInfoProps {
  selectedCity: City;
  sunrise: Sys['sunrise'];
  sunset: Sys['sunset'];
}

dayjs.extend(utc);
dayjs.extend(timezone);

const SunriseSunsetInfo: FC<SunriseSunsetInfoProps> = ({
  selectedCity,
  sunrise,
  sunset,
}) => {
  const convertTime = (unixTime: number) =>
    dayjs.unix(unixTime).tz(selectedCity.timezone).format('HH:mm');

  return (
    <SunriseSunsetInfoContainer>
      <Sunrise>Sunrise: {convertTime(sunrise)}</Sunrise>
      <Sunset>Sunset: {convertTime(sunset)}</Sunset>
    </SunriseSunsetInfoContainer>
  );
};

export default SunriseSunsetInfo;
