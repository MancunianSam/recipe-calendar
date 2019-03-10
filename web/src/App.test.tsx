import React from "react";
import App from "./App";
import { render, fireEvent, waitForElement } from "react-testing-library";

describe("<App/>", () => {
  test("renders without crashing", () => {
    const { container } = render(<App />);
    expect(container).not.toBeNull();
  });

  test("renders the day select", () => {
    const { getByLabelText } = render(<App />);
    getByLabelText("Day");
  });

  test("renders the location select", () => {
    const { getByLabelText } = render(<App />);
    getByLabelText("Location");
  });

  test("renders the correct default input group", () => {
    const { getByAltText } = render(<App />);
    getByAltText("url");
  });

  test("renders the correct input group for book location", async () => {
    const { getByAltText } = render(<App defaultLocation="book" />);
    getByAltText("bookName");
    getByAltText("page");
  });
});
