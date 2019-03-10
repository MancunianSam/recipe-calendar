import { LocationSelect } from "../components/select";
import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";

describe("<LocationSelect/>", () => {
  test("renders without crashing", () => {
    const locationSelect: ShallowWrapper<{}, {}, {}> = shallow(
      <LocationSelect setStateFunction={jest.fn()} />
    );
    expect(locationSelect).not.toBeNull();
  });

  test("renders the correct options", () => {
    const mockedDate: Date = new Date(2019, 1, 1);
    global.Date.now = jest.fn(() => mockedDate.getTime());

    const locationSelect: ShallowWrapper<{}, {}, {}> = shallow(
      <LocationSelect setStateFunction={jest.fn()} />
    );
    const options: ShallowWrapper<{}, {}, {}> = locationSelect.find("option");
    expect(options.get(0).props.children).toEqual("Web");
    expect(options.get(1).props.children).toEqual("Book");
  });

  test("onChange calls setState function correctly", () => {
    const stateFunction: jest.Mock = jest.fn();
    const locationSelect: ShallowWrapper<{}, {}, {}> = shallow(
      <LocationSelect setStateFunction={stateFunction} />
    );
    locationSelect
      .find(".app-select")
      .simulate("change", { currentTarget: "abcde" });
    expect(stateFunction).toHaveBeenCalled();
  });
});
