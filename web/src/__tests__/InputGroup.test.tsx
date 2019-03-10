import { InputGroup } from "../components/inputs";
import * as React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";

describe("<InputGroup/>", () => {
  beforeEach(cleanup);
  test("renders without crashing", () => {
    const { container } = render(
      <InputGroup
        inputs={[{ id: "id", label: "", setStateFunction: jest.fn() }]}
      />
    );
    expect(container).not.toBeNull();
  });

  test("renders the correct input boxes", () => {
    const { container } = render(
      <InputGroup
        inputs={[
          { id: "id", label: "", setStateFunction: jest.fn() },
          { id: "id2", label: "", setStateFunction: jest.fn() }
        ]}
      />
    );
    container.querySelector("#id");
    container.querySelector("#id2");
  });

  test("Changing the input box calls the state function correctly", async () => {
    const setStateFunction: jest.Mock = jest.fn();
    const { getByAltText } = render(
      <InputGroup inputs={[{ id: "id", label: "", setStateFunction }]} />
    );
    const input: HTMLElement = getByAltText("id");
    input.innerHTML = "Hello";
    fireEvent.change(input, { target: { value: "Hello" } });
    expect(setStateFunction).toHaveBeenCalled();
  });
});
