import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { screen } from '@testing-library/react';
import { render } from 'test-utils';

import * as stories from './Header.stories';

const { Default } = composeStories(stories);

describe('components/Header', () => {
  test('should render Header component', () => {
    render(<Default />);

    const HeaderTitleElement = screen.getByRole<HTMLHeadingElement>('heading', {
      level: 1,
    }); // Get element by heading role to check a11y
    expect(HeaderTitleElement).toBeInTheDocument();
  });
});
