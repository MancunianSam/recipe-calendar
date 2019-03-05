import * as React from "react";
import "./Select.css";

interface ILocationSelectProps {
  setStateFunction: React.Dispatch<string>;
}

export const LocationSelect: React.FunctionComponent<ILocationSelectProps> = (
  props: ILocationSelectProps
) => {
  const onChangeLocation: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void = event => {
    props.setStateFunction(event.currentTarget.value);
  };

  return (
    <select className="app-select" onChange={onChangeLocation}>
      <option value="web">Web</option>
      <option value="book">Book</option>
    </select>
  );
};
