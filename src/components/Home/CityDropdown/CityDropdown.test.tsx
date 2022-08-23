import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { screen } from '@testing-library/react';
import { render } from 'test-utils';

import * as stories from './CityDropdown.stories';

const { Default, Hover, SelectFromDropDown } = composeStories(stories);

describe('components/CityDropdown', () => {
  test('should render CityDropdown component', () => {
    render(<Default />);

    const DropDownContainerElement = screen.getByTestId(
      'city-dropdown-container'
    );
    expect(DropDownContainerElement).toBeInTheDocument();
  });

  test('should show dropdown which has 3 options after hover', async () => {
    const { container } = render(<Hover />);

    await Hover.play({ canvasElement: container }); // Emit .play function in storybook to show dropdown
    const OptionElements = screen.getAllByRole('option');
    expect(OptionElements).toHaveLength(3);
    expect(OptionElements[0]).toHaveTextContent(/Lisbon/);
    expect(OptionElements[1]).toHaveTextContent(/New York/);
    expect(OptionElements[2]).toHaveTextContent(/London/);
  });

  test('should be able to select an option from dropdown', async () => {
    const { container } = render(<SelectFromDropDown />);

    await SelectFromDropDown.play({ canvasElement: container }); // Emit .play function in storybook to select dropdown
    const ButtonElement = screen.getByRole('button');
    expect(ButtonElement).toHaveTextContent(/New York/);
  });
});
