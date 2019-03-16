import { LocationSelect } from "../components/select";
import * as React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  cleanup
} from "react-testing-library";

describe("<LocationSelect/>", () => {
  beforeEach(cleanup);
  test("renders without crashing", () => {
    const { container } = render(
      <LocationSelect setStateFunction={jest.fn()} defaultLocation="web" />
    );
    expect(container).not.toBeNull();
  });

  test("renders the correct options", () => {
    const mockedDate: Date = new Date(2019, 1, 1);
    global.Date.now = jest.fn(() => mockedDate.getTime());

    const { container, getByText } = render(
      <LocationSelect setStateFunction={jest.fn()} defaultLocation="web" />
    );
    getByText("Web");
    getByText("Book");
  });

  test("onChange calls setState function correctly", () => {
    const stateFunction: jest.Mock = jest.fn();
    const { getByLabelText } = render(
      <LocationSelect setStateFunction={stateFunction} defaultLocation="web" />
    );
    fireEvent.change(getByLabelText("Location"), {
      currentTarget: { value: "book" }
    });
    expect(stateFunction).toHaveBeenCalled();
  });
});
