import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Temperature from '.';

export default {
  title: 'Components/Home/Temperature',
  component: Temperature,
} as ComponentMeta<typeof Temperature>;

const Template: ComponentStory<typeof Temperature> = ({
  isFahrenheit = true,
  temperature = 68.34,
}) => <Temperature isFahrenheit={isFahrenheit} temperature={temperature} />;

export const Fahrenheit = Template.bind({});

export const Celsius = Template.bind({});
Celsius.args = {
  isFahrenheit: false,
  temperature: 20.19,
};
