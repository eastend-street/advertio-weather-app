import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

import CityDropdown from '.';

import { CITIES } from '../constants';
import { City } from '../types';

export default {
  title: 'Components/Home/CityDropdown',
  component: CityDropdown,
} as ComponentMeta<typeof CityDropdown>;

const Template: ComponentStory<typeof CityDropdown> = () => {
  const [localValue, setValue] = useState(CITIES[0]);
  const handleSelectCity = (cityValue: City['value']) => {
    setValue(CITIES.find((city) => city.value === cityValue) || CITIES[0]);
  };
  return (
    <CityDropdown selectedCity={localValue} onSelectCity={handleSelectCity} />
  );
};

export const Default = Template.bind({});

export const Hover = Template.bind({});
Hover.play = async ({ canvasElement }) => {
  await userEvent.hover(
    within(canvasElement).getByTestId('city-dropdown-container')
  );
};

export const SelectFromDropDown = Template.bind({});
SelectFromDropDown.play = async ({ canvasElement }) => {
  await userEvent.hover(
    within(canvasElement).getByTestId('city-dropdown-container')
  );
  await userEvent.click(within(canvasElement).getByText('New York'));
};
