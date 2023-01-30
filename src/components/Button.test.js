import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

afterEach(cleanup);

const setUp = () => {
  const { container } = render(<Button value={12} multiplesOf={6} />);
  return { container }; 
}

describe('Button component', function() {

  test('renders button element in Primary colour', () => {
    const { container } = setUp();
    expect(container.querySelectorAll('.button').length).toBe(1);
    expect(container.querySelectorAll('.button.primary').length).toBe(1);
  });

  test('renders button element without Primary when not a multiplication number', () => {
    const { container } = render(<Button value={13} multiplesOf={6} />);
    expect(container.querySelectorAll('.button').length).toBe(1);
    expect(container.querySelectorAll('.button:not(secondary)').length).toBe(1);
  });

});
