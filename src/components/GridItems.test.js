import React from 'react';
import { render, cleanup, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import GridItems from './GridItems';
import { numbersArray } from "./helper";
import { appDescription } from '../lib/helper';

afterEach(cleanup);

const setUp = () => {
  const onButtonClick = jest.fn();
  const { container } = render(
    <GridItems
      onButtonClick={onButtonClick}
      multiplesOf="10" 
      items={numbersArray}
    />
  );
  return { container }; 
}

describe('GridItems component', function() {

  test('renders GridItems component with items then click another button and re-count highlighted icons', () => {
    const { container } = setUp();
    expect(container.querySelectorAll('.button.primary').length).toBe(14);

    const secondButton = screen.getByText('2');
    fireEvent.click(secondButton);
    
    waitFor(() => {
      expect(container.querySelectorAll('.button.primary').length).toBe(77);
    });

  });

});
