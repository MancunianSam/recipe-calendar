import * as React from "react";
import "./Select.css";

interface ILocationSelectProps {
  setStateFunction: React.Dispatch<string>;
  defaultLocation: string;
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
    <>
      <label htmlFor="location">Location</label>
      <select
        id="location"
        className="app-select"
        onChange={onChangeLocation}
        defaultValue={props.defaultLocation}
      >
        <option value="web">Web</option>
        <option value="book">Book</option>
      </select>
    </>
  );
};
