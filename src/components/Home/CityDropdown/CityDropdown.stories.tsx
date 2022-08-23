import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

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
