import { cleanup, render } from "react-testing-library";
import { InputGroup } from "../components/inputs";
import * as React from "react";

describe("<InputGroup/>", () => {
  beforeEach(cleanup);

  test("renders without crashing", () => {
    const { container } = render(
      <InputGroup
        inputs={[{ id: "id", label: "", setStateFunction: jest.fn() }]}
      />
    );
    expect(container).not.toBeNull();
    expect(container.querySelector("#id")).not.toBeNull;
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
    expect(container.querySelector("#id")).not.toBeNull;
    expect(container.querySelector("#id2")).not.toBeNull;
  });
});
