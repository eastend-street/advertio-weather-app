import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { screen } from '@testing-library/react';
import { render } from 'test-utils';

import * as stories from './SunriseSunsetInfo.stories';

const { Default } = composeStories(stories);

describe('components/SunriseSunsetInfo', () => {
  test('should render sunrise with the current city timezone', () => {
    render(<Default />);

    const sunriseElement = screen.getByText(/Sunrise: 05:58/);
    expect(sunriseElement).toBeInTheDocument();
  });

  test('should render sunset with the current city timezone', () => {
    render(<Default />);

    const sunsetElement = screen.getByText(/Sunset: 20:08/);
    expect(sunsetElement).toBeInTheDocument();
  });
});
