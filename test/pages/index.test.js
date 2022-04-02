import React from 'react';

// Using render and screen from test-utils.js instead of
// @testing-library/react

import { screen, render } from '../test-utils';

import Home from '@/pages/index.js';

describe('HomePage', () => {
  it('should render the text',  () => {
    render(<Home />)

    const text = screen.getByText(
      /Explore Alienware and Dell gaming system/i
    )

    expect(text).toBeInTheDocument()
  })
})