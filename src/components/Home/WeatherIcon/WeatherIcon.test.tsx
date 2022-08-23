import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { screen } from '@testing-library/react';
import { render } from 'test-utils';

import * as stories from './WeatherIcon.stories';

const { Default, MultipleWeather } = composeStories(stories);

describe('components/WeatherIcon', () => {
  test('should render WeatherIcon component with alt and src', () => {
    render(<Default />);

    const IconElement = screen.getByAltText(/few clouds/);
    expect(IconElement).toBeInTheDocument();
    expect(IconElement).toHaveAttribute(
      'src',
      'http://openweathermap.org/img/wn/02d@2x.png'
    );
  });

  test('should render MultipleWeather component with alt and src', () => {
    render(<MultipleWeather />);
    [
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
    ].forEach((weather) => {
      const IconElement = screen.getByAltText(weather.description);
      expect(IconElement).toBeInTheDocument();
      expect(IconElement).toHaveAttribute(
        'src',
        `http://openweathermap.org/img/wn/${weather.icon}@2x.png`
      );
    });
  });
});
