import { NumberArray } from "../models/types";

export const isMultipleOfNumber = (value: number, multiple?: number): boolean => { 
    if (!value || !multiple) return false;
    if (value % multiple === 0) return true;
    return false;
}

export let numbersArray = [] as NumberArray[];
for (let i = 1; i <= 144; i++) {
  numbersArray.push({ value: i, selected: false });
}