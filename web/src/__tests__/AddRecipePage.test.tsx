import React from "react";
import { AddRecipePage } from "../pages/AddRecipePage";
import { render, fireEvent, waitForElement } from "react-testing-library";

describe("<AddRecipePage/>", () => {
  test("renders without crashing", () => {
    const { container } = render(<AddRecipePage />);
    expect(container).not.toBeNull();
  });

  test("renders the day select", () => {
    const { getByLabelText } = render(<AddRecipePage />);
    getByLabelText("Day");
  });

  test("renders the location select", () => {
    const { getByLabelText } = render(<AddRecipePage />);
    getByLabelText("Location");
  });

  test("renders the correct default input group", () => {
    const { getByAltText } = render(<AddRecipePage />);
    getByAltText("url");
  });

  test("renders the correct input group for book location", async () => {
    const { getByAltText } = render(<AddRecipePage defaultLocation="book" />);
    getByAltText("bookName");
    getByAltText("page");
  });
});
