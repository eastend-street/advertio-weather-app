import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent, screen } from '@storybook/testing-library';

import UnitToggle from '.';

export default {
  title: 'Components/Home/UnitToggle',
  component: UnitToggle,
} as ComponentMeta<typeof UnitToggle>;

const Template: ComponentStory<typeof UnitToggle> = () => {
  const [localValue, setValue] = useState(false);
  const onToggle = () => setValue((prevState) => !prevState);
  return <UnitToggle isFahrenheit={localValue} onToggle={onToggle} />;
};

export const Default = Template.bind({});

export const SelectFahrenheit = Template.bind({});
SelectFahrenheit.play = async ({ canvasElement }) => {
  await userEvent.click(within(canvasElement).getByRole('checkbox'));
};
