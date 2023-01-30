import React from 'react';
import { render, cleanup, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Grid from './Grid';
import { numbersArray } from "./helper";
import { appDescription } from '../lib/helper';

afterEach(cleanup);

const setUp = () => {
  const { container } = render(<Grid items={numbersArray} />);
  return { container }; 
}

describe('Grid component', function() {

  test('renders Grid component with appDescription displayed', () => {
    setUp();
    expect(screen.getByText(appDescription)).toBeInTheDocument();
  });

  test('renders Grid with reset button element', () => {
    const { container } = setUp();
    expect(screen.getByText('Reset')).toBeInTheDocument();
    expect(container.querySelectorAll('.button.red').length).toBe(1);
  });

  test('renders Grid component with No items found when no items passed in', () => {
    render(<Grid items={[]} />);
    expect(screen.getByText('No items found')).toBeInTheDocument();
  });

  test('renders Grid has 77 multiplications once 2 click and 0 once Reset clicked', () => {
    const { container } = setUp();
    expect(container.querySelectorAll('.button.primary').length).toBe(0);

    const secondButton = screen.getByText('2');
    fireEvent.click(secondButton);
    
    waitFor(() => {
      expect(container.querySelectorAll('.button.primary').length).toBe(77);
    });

    const resetButton = screen.getByText('Reset');
    fireEvent.click(resetButton);

    waitFor(() => {
      expect(container.querySelectorAll('.button.primary').length).toBe(0);
    });

  });

});
