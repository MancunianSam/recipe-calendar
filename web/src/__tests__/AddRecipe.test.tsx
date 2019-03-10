import { AddRecipe } from "../components/buttons";
import Axios from "axios";
import MockAdapter from "axios-mock-adapter";
import * as React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  cleanup
} from "react-testing-library";
import { act } from "react-dom/test-utils";

const mock = new MockAdapter(Axios);

describe("<AddRecipe />", () => {
  beforeEach(cleanup);
  test("Renders without crashing", () => {
    expect(render(<AddRecipe day="" url="" page={1} book="" />)).not.toBeNull();
  });

  test("A successful post shows the success message", async () => {
    const data = { day: "day", url: "url", page: 1, book: "book" };
    const { getByTestId, getByText } = render(
      <AddRecipe day="day" url="url" page={1} book="book" />
    );
    mock.onPost("/recipes").reply(200, { success: true });
    fireEvent.click(getByTestId("addRecipeButton"));
    await waitForElement(() => getByText("Success"));
    expect(mock.history.post[0].data).toEqual(JSON.stringify(data));
  });
});
