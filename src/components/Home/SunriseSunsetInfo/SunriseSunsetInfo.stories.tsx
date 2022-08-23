import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SunriseSunsetInfo from '.';

export default {
  title: 'Components/Home/SunriseSunsetInfo',
  component: SunriseSunsetInfo,
} as ComponentMeta<typeof SunriseSunsetInfo>;

const Template: ComponentStory<typeof SunriseSunsetInfo> = ({
  selectedCity,
  sunrise,
  sunset,
}) => (
  <SunriseSunsetInfo
    selectedCity={selectedCity}
    sunrise={sunrise}
    sunset={sunset}
  />
);

export const Default = Template.bind({});
Default.args = {
  selectedCity: {
    label: 'Lisbon',
    value: 'lisbon',
    timezone: 'Europe/Lisbon',
  },
  sunrise: 1661230719,
  sunset: 1661281687,
};
