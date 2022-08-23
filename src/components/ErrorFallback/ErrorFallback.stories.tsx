import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ErrorFallback from './index';

export default {
  title: 'Components/ErrorFallback',
  component: ErrorFallback,
} as ComponentMeta<typeof ErrorFallback>;

const Template: ComponentStory<typeof ErrorFallback> = (args) => (
  <ErrorFallback {...args} />
);

export const Default = Template.bind({});

export const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {
  error: new Error('Internal server error'),
};
