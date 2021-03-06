import * as React from "react";
import Axios from "axios";

import "./Buttons.css";
import { config } from "../../confiig/config";
import { IRecipe } from "../../pages/ViewRecipePage";

interface IAddRecipeProps {
  day: string;
  page: number;
  url: string;
  book: string;
  setRecipes: React.Dispatch<IRecipe[]>;
}

export const AddRecipe: React.FunctionComponent<IAddRecipeProps> = props => {
  const [message, setMessage]: [
    string,
    React.Dispatch<string>
  ] = React.useState<string>("");
  const onClick: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void = event => {
    const { day, url, page, book } = props;
    Axios.post(`${config.serverUrl}/recipes`, {
      day,
      url,
      page,
      book
    })
      .then(response => {
        if (response.data.success) {
          setMessage("Success");
          props.setRecipes(response.data.recipes);
        }
      })
      .catch(_ => setMessage("Failure"));
  };

  return (
    <div className="addRecipe">
      <button
        onClick={onClick}
        data-testid="addRecipeButton"
        id="addRecipeButton"
      >
        Add Recipe
      </button>
      <span className={`message ${message === "Success" ? "green" : "red"}`}>
        {message}
      </span>
    </div>
  );
};
