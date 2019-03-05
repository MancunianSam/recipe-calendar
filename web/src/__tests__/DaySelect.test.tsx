import { cleanup, render, getByText, fireEvent } from "react-testing-library";
import { DaySelect } from "../components/select";
import * as React from "react";

describe("<DaySelect/>", () => {
  beforeEach(cleanup);

  test("renders without crashing", () => {
    const { container } = render(<DaySelect setStateFunction={jest.fn()} />);
    expect(container).not.toBeNull();
  });

  test("renders the correct days", () => {
    const mockedDate: Date = new Date(2019, 1, 1);
    global.Date.now = jest.fn(() => mockedDate.getTime());

    const { container } = render(<DaySelect setStateFunction={jest.fn()} />);
    expect(getByText(container, "Fri Feb 01 2019")).not.toBeNull();
    expect(getByText(container, "Sat Feb 02 2019")).not.toBeNull();
    expect(getByText(container, "Sun Feb 03 2019")).not.toBeNull();
    expect(getByText(container, "Mon Feb 04 2019")).not.toBeNull();
    expect(getByText(container, "Tue Feb 05 2019")).not.toBeNull();
    expect(getByText(container, "Wed Feb 06 2019")).not.toBeNull();
    expect(getByText(container, "Thu Feb 07 2019")).not.toBeNull();
  });

  test("onChange calls setState function correctly", () => {
    const stateFunction: jest.Mock = jest.fn();
    const { container } = render(
      <DaySelect setStateFunction={stateFunction} />
    );
    const select: Element | null = container.querySelector(".app-select");
    if (select) {
      fireEvent.change(select);
    }
    expect(stateFunction).toHaveBeenCalled();
  });
});
