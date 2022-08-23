import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import WeatherIcon from '.';

export default {
  title: 'Components/Home/WeatherIcon',
  component: WeatherIcon,
} as ComponentMeta<typeof WeatherIcon>;

const Template: ComponentStory<typeof WeatherIcon> = ({
  weatherArray = [],
}) => <WeatherIcon weatherArray={weatherArray} />;

export const Default = Template.bind({});
Default.args = {
  weatherArray: [
    {
      id: 801,
      main: 'Clouds',
      description: 'few clouds',
      icon: '02d',
    },
  ],
};

export const MultipleWeather = Template.bind({});
MultipleWeather.args = {
  weatherArray: [
    {
      id: 801,
      main: 'Clouds',
      description: 'few clouds',
      icon: '02d',
    },
    {
      id: 701,
      main: 'Mist',
      description: 'mist',
      icon: '50n',
    },
    {
      id: 802,
      main: 'Clouds',
      description: 'scattered clouds',
      icon: '03d',
    },
  ],
};
