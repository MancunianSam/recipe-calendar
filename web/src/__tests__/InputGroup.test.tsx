import { InputGroup } from "../components/inputs";
import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { IInputProps } from "../components/inputs/InputGroup";

describe("<InputGroup/>", () => {
  test("renders without crashing", () => {
    const inputGroup: ShallowWrapper<IInputProps, {}, {}> = shallow(
      <InputGroup
        inputs={[{ id: "id", label: "", setStateFunction: jest.fn() }]}
      />
    );
    expect(inputGroup).not.toBeNull();
    expect(inputGroup.find("#id")).not.toBeNull;
  });

  test("renders the correct input boxes", () => {
    const inputGroup: ShallowWrapper<IInputProps, {}, {}> = shallow(
      <InputGroup
        inputs={[
          { id: "id", label: "", setStateFunction: jest.fn() },
          { id: "id2", label: "", setStateFunction: jest.fn() }
        ]}
      />
    );
    expect(inputGroup.find("#id")).not.toBeNull;
    expect(inputGroup.find("#id2")).not.toBeNull;
  });

  test("Changing the input box calls the state function correctly", () => {
    const setStateFunction: jest.Mock = jest.fn();
    const inputGroup: ShallowWrapper<IInputProps, {}, {}> = shallow(
      <InputGroup inputs={[{ id: "id", label: "", setStateFunction }]} />
    );

    inputGroup.find("#id").simulate("change", { target: "abcde" });
    expect(setStateFunction).toHaveBeenCalled();
  });
});
