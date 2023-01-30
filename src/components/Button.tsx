import React from "react";
import { isMultipleOfNumber } from "./helper";
import { Button } from "semantic-ui-react";

interface IButtonItems {
  value: number;
  multiplesOf?: number;
}

const ButtonItem = (props : IButtonItems): React.ReactElement => {
  const { value, multiplesOf } = props;
  const isMultipleOf = isMultipleOfNumber(value, multiplesOf);
  return (
    <Button
      value={value}
      size='massive'
      primary={isMultipleOf}
    >
      {value}
    </Button>
  );
};

export default ButtonItem;

