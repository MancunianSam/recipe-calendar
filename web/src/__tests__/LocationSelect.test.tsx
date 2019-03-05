import { cleanup, render, getByText, fireEvent } from "react-testing-library";
import { LocationSelect } from "../components/select";
import * as React from "react";

describe("<LocationSelect/>", () => {
  beforeEach(cleanup);

  test("renders without crashing", () => {
    const { container } = render(
      <LocationSelect setStateFunction={jest.fn()} />
    );
    expect(container).not.toBeNull();
  });

  test("renders the correct options", () => {
    const mockedDate: Date = new Date(2019, 1, 1);
    global.Date.now = jest.fn(() => mockedDate.getTime());

    const { container } = render(
      <LocationSelect setStateFunction={jest.fn()} />
    );
    expect(getByText(container, "Web")).not.toBeNull();
    expect(getByText(container, "Book")).not.toBeNull();
  });

  test("onChange calls setState function correctly", () => {
    const stateFunction: jest.Mock = jest.fn();
    const { container } = render(
      <LocationSelect setStateFunction={stateFunction} />
    );
    const select: Element | null = container.querySelector(".app-select");
    if (select) {
      fireEvent.change(select);
    }
    expect(stateFunction).toHaveBeenCalled();
  });
});
