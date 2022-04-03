import React from 'react';
import preloadAll from 'jest-next-dynamic' 

import { screen, render } from '../test-utils';

import Home from '@/pages/index.js';

describe('HomePage', () => {
  beforeAll(async () => {
    await preloadAll()
  })

  it('should render the text',  () => {
    render(<Home />)

    const text = screen.getByText(
      /Explore Alienware and Dell gaming system/i
    )

    expect(text).toBeInTheDocument()
  })
})