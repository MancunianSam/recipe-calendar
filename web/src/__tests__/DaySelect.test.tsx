import { DaySelect } from "../components/select";
import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";

describe("<DaySelect/>", () => {
  test("renders without crashing", () => {
    const daySelect: ShallowWrapper<{}, {}, {}> = shallow(
      <DaySelect setStateFunction={jest.fn()} />
    );
    expect(daySelect).not.toBeNull();
  });

  test("renders the correct days", () => {
    const mockedDate: Date = new Date(2019, 1, 1);
    global.Date.now = jest.fn(() => mockedDate.getTime());

    const daySelect: ShallowWrapper<{}, {}, {}> = shallow(
      <DaySelect setStateFunction={jest.fn()} />
    );
    const options: ShallowWrapper<{}, {}, {}> = daySelect.find("option");
    expect(options.get(0).props.children).toEqual("Fri Feb 01 2019");
    expect(options.get(1).props.children).toEqual("Sat Feb 02 2019");
    expect(options.get(2).props.children).toEqual("Sun Feb 03 2019");
    expect(options.get(3).props.children).toEqual("Mon Feb 04 2019");
    expect(options.get(4).props.children).toEqual("Tue Feb 05 2019");
    expect(options.get(5).props.children).toEqual("Wed Feb 06 2019");
    expect(options.get(6).props.children).toEqual("Thu Feb 07 2019");
  });

  test("onChange calls setState function correctly", () => {
    const stateFunction: jest.Mock = jest.fn();
    const daySelect: ShallowWrapper<{}, {}, {}> = shallow(
      <DaySelect setStateFunction={stateFunction} />
    );
    daySelect
      .find(".app-select")
      .simulate("change", { currentTarget: "abcde" });
    expect(stateFunction).toHaveBeenCalled();
  });
});
