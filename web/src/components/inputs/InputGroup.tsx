import * as React from "react";
import "./InputGroup.css";

export interface IInputProps {
  setStateFunction: React.Dispatch<string>;
  id: string;
  label: string;
}

export interface IInputGroupProps {
  inputs: IInputProps[];
}

const InputGroup: React.FunctionComponent<IInputGroupProps> = (
  props: IInputGroupProps
) => {
  const onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    setStateFunction: React.Dispatch<string>
  ) => void = (event, setStateFunction) => {
    console.log("Here");
    setStateFunction(event.target.value);
  };
  return (
    <div>
      {props.inputs.map(input => {
        return (
          <div className="inputs" key={input.id}>
            <label htmlFor={input.id}>{input.label}</label>
            <input
              type="text"
              alt={input.id}
              id={input.id}
              className="text-input"
              onChange={event => onChange(event, input.setStateFunction)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default InputGroup;
