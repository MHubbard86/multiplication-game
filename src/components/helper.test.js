import React from 'react';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { numbersArray, isMultipleOfNumber } from './helper';

afterEach(cleanup);

describe('helper functions for isMultipleOfNumber', function() {

  test('expect isMultipleOfNumber to return FALSE when no variables passed in', () => {
    const result = isMultipleOfNumber();
    expect(result).toBeFalsy();
  });

  test('expect isMultipleOfNumber to return FALSE when only 1 variable passed in', () => {
    const result = isMultipleOfNumber(1);
    expect(result).toBeFalsy();

    const result1 = isMultipleOfNumber(null, 1);
    expect(result1).toBeFalsy();
  });

  test('expect isMultipleOfNumber to return TRUE when only 1 variable passed in', () => {
    const result = isMultipleOfNumber(4, 2);
    expect(result).toBeTruthy();

    const result1 = isMultipleOfNumber(22, 1);
    expect(result1).toBeTruthy();

    const result2 = isMultipleOfNumber(100, 50);
    expect(result2).toBeTruthy();

    const result3 = isMultipleOfNumber(120, 12);
    expect(result3).toBeTruthy();
  });

});

describe('helper functions for numbersArray', function() {

  test('expect numbers array to be 144', () => {
    expect(numbersArray.length).toBe(144);
  });

});
