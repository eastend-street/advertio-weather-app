import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { screen } from '@testing-library/react';
import { render } from 'test-utils';

import * as stories from './Temperature.stories';

const { Fahrenheit, Celsius } = composeStories(stories);

describe('components/Temperature', () => {
  test('should render Temperature component with 68 fahrenheit', () => {
    render(<Fahrenheit />);

    const TemperatureElement = screen.getByLabelText('temperature');
    expect(TemperatureElement).toHaveTextContent(/68°F/);
  });

  test('should render Temperature component with 20 celsius', () => {
    render(<Celsius />);

    const TemperatureElement = screen.getByLabelText('temperature');
    expect(TemperatureElement).toHaveTextContent(/20°C/);
  });

  test('should render fahrenheit aria-label', () => {
    render(<Fahrenheit />);

    const fahrenheitTextElement = screen.getByLabelText('fahrenheit');
    expect(fahrenheitTextElement).toBeInTheDocument();
    expect(fahrenheitTextElement).toHaveTextContent(/°F/);
  });

  test('should render celsius aria-label', () => {
    render(<Celsius />);

    const fahrenheitTextElement = screen.getByLabelText('celsius');
    expect(fahrenheitTextElement).toBeInTheDocument();
    expect(fahrenheitTextElement).toHaveTextContent(/°C/);
  });

  describe('Round up/down temperature', () => {
    test('should round up the decimal point of the fahrenheit', () => {
      render(<Fahrenheit temperature={70.65} />);

      const TemperatureElement = screen.getByLabelText('temperature');
      expect(TemperatureElement).toHaveTextContent(/71°F/);
    });

    test('should round down the decimal point of the fahrenheit', () => {
      render(<Fahrenheit temperature={70.45} />);

      const TemperatureElement = screen.getByLabelText('temperature');
      expect(TemperatureElement).toHaveTextContent(/70°F/);
    });

    test('should round up the decimal point of the celsius', () => {
      render(<Celsius temperature={25.65} />);

      const TemperatureElement = screen.getByLabelText('temperature');
      expect(TemperatureElement).toHaveTextContent(/26°C/);
    });

    test('should round down the decimal point of the celsius', () => {
      render(<Celsius temperature={25.45} />);

      const TemperatureElement = screen.getByLabelText('temperature');
      expect(TemperatureElement).toHaveTextContent(/25°C/);
    });
  });
});
