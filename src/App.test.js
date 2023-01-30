import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { appHeaderText, appDescription } from './lib/helper';
import { numbersArray } from './components/helper';

afterEach(cleanup);

const setUp = () => {
  const { container } = render(<App />);
  return { container }; 
}

describe('App', function() {

  test('renders App header text within h1 element', () => {
    setUp();
    expect(screen.getByText(appHeaderText)).toBeInTheDocument();
  });

  test('renders App description text within h2 element', () => {
    setUp();
    expect(screen.getByText(appDescription)).toBeInTheDocument();
  });

  test('renders App with reset button element', () => {
    const { container } = setUp();
    expect(screen.getByText('Reset')).toBeInTheDocument();
    expect(container.querySelectorAll('.button.red').length).toBe(1);
  });

  test('renders App with one grid component', () => {
    const { container } = setUp();
    expect(container.getElementsByClassName('grid').length).toBe(1);
  });

  test('renders App with rows equal to length of numbers array', () => {
    const { container } = setUp();
    expect(container.querySelectorAll('.button:not(.red)').length).toBe(numbersArray.length);
  });

});
