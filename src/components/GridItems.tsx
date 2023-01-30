import React, { useState, useCallback } from "react";
import { Grid } from "semantic-ui-react";
import { NumberArray } from "../models/types";
import ButtonItem from "./Button";

interface IGridItems {
    items: NumberArray[];
    onButtonClick: (value: number) => void;
    multiplesOf: number;
}

const GridItems = ( props : IGridItems): React.ReactElement => {
const { items, onButtonClick, multiplesOf } = props;
  return (
    <Grid
        centered={true}
        columns='equal'
        divided={true}
        padded={true}
        textAlign='center'
        verticalAlign='middle'
        stackable={true}
    >
        <Grid.Row columns={3} mobile={1} tablet={2} laptop={3}>
            {items.map((item, index) =>
            <Grid.Column
                key={index}
                textAlign='center'
                verticalAlign='middle'
                style={{ border: '1px solid lightgrey', padding: '0.5rem'}}
                onClick={(e: any): void => onButtonClick(parseInt(e.target.innerText))}
            >
                <ButtonItem
                    value={item.value}
                    multiplesOf={multiplesOf}
                />
            </Grid.Column>
            )}
        </Grid.Row>
    </Grid>
  );
};

export default GridItems;