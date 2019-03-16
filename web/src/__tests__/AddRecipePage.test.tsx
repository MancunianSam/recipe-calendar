import React from "react";
import { AddRecipePage } from "../pages/AddRecipePage";
import { render, fireEvent, waitForElement } from "react-testing-library";

const defaultLocation: string = "web";

describe("<AddRecipePage/>", () => {
  test("renders without crashing", () => {
    const { container } = render(
      <AddRecipePage
        recipes={[]}
        defaultLocation="web"
        setRecipes={jest.fn()}
      />
    );
    expect(container).not.toBeNull();
  });

  test("renders the day select", () => {
    const { getByLabelText } = render(
      <AddRecipePage
        recipes={[]}
        defaultLocation="web"
        setRecipes={jest.fn()}
      />
    );
    getByLabelText("Day");
  });

  test("renders the location select", () => {
    const { getByLabelText } = render(
      <AddRecipePage
        recipes={[]}
        defaultLocation="web"
        setRecipes={jest.fn()}
      />
    );
    getByLabelText("Location");
  });

  test("renders the correct default input group", () => {
    const day: string = new Date().toDateString();
    const { getByAltText } = render(
      <AddRecipePage
        recipes={[{ day }]}
        defaultLocation="web"
        setRecipes={jest.fn()}
      />
    );
    getByAltText("url");
  });

  test("renders the correct input group for book location", async () => {
    const day: string = new Date().toDateString();
    const { getByAltText } = render(
      <AddRecipePage
        recipes={[{ day }]}
        defaultLocation="book"
        setRecipes={jest.fn()}
      />
    );
    getByAltText("bookName");
    getByAltText("page");
  });
});
