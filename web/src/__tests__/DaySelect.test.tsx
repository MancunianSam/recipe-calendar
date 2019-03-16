import { DaySelect } from "../components/select";
import * as React from "react";
import { render, RenderResult, fireEvent } from "react-testing-library";

describe("<DaySelect/>", () => {
  test("renders without crashing", () => {
    const daySelect: RenderResult = render(
      <DaySelect setStateFunction={jest.fn()} done={true} />
    );
    expect(daySelect).not.toBeNull();
  });

  test("renders the correct days", () => {
    const mockedDate: Date = new Date(2019, 1, 1);
    global.Date.now = jest.fn(() => mockedDate.getTime());

    const { getByText } = render(
      <DaySelect setStateFunction={jest.fn()} done={true} />
    );

    getByText("Fri Feb 01 2019");
    getByText("Sat Feb 02 2019");
    getByText("Sun Feb 03 2019");
    getByText("Mon Feb 04 2019");
    getByText("Tue Feb 05 2019");
    getByText("Wed Feb 06 2019");
    getByText("Thu Feb 07 2019");
  });
});
