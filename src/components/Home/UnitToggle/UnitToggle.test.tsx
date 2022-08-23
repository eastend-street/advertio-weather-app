import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { screen } from '@testing-library/react';
import { render } from 'test-utils';

import * as stories from './UnitToggle.stories';

const { Default, SelectFahrenheit } = composeStories(stories);

describe('components/UnitToggle', () => {
  test('should render UnitToggle component with selecting Celsius by default', () => {
    render(<Default />);

    const ToggleSwitchElement = screen.getByRole('checkbox');
    expect(ToggleSwitchElement).not.toBeChecked();
  });

  test('should switch toggle after click', async () => {
    const { container } = render(<SelectFahrenheit />);

    await SelectFahrenheit.play({ canvasElement: container }); // Emit .play function in storybook to switch toggle
    const ToggleSwitchElement = screen.getByRole('checkbox');
    expect(ToggleSwitchElement).toBeChecked();
  });
});
