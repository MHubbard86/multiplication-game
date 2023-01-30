import React, { useState, useCallback } from "react";
import { Grid, Button } from "semantic-ui-react";
import { NumberArray } from "../models/types";
import { appDescription } from '../lib/helper';
import { AppDescription } from '../styles/styledComponents';
import GridItems from './GridItems';

interface IGridItems {
  items: NumberArray[];
}

const AppGrid = ({ items = [] as NumberArray[] } : IGridItems): React.ReactElement => {
  const [multiplesOf, setMultiplesOf] = useState(0);

  const onButtonClick = useCallback((value: number): void => {
    if (value === multiplesOf) return;
    setMultiplesOf(value);
  }, []);

  const playAgain = useCallback((): void => {
    setMultiplesOf(0);
  }, []);
 
  return (
    <section>
      <AppDescription>{appDescription}</AppDescription>
      <Button
        onClick={playAgain}
        color='red'
        size='massive'
      >Reset</Button>
      { items.length > 0 &&
        <GridItems onButtonClick={onButtonClick} multiplesOf={multiplesOf} items={items} />
      }
      { items.length === 0 && 'No items found' }
    </section>
  );
};

export default AppGrid;