import * as React from "react";
import Axios from "axios";

interface IAddRecipeProps {
  day: string;
  page: number;
  url: string;
  book: string;
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
    Axios.post("http://172.16.238.3:3002/recipes", { day, url, page, book })
      .then(response => {
        if (response.data.success) {
          setMessage("Success");
        }
      })
      .catch(_ => setMessage("Failure"));
  };

  return (
    <div>
      <button onClick={onClick} data-testid="addRecipeButton">
        Add Recipe
      </button>
      <span className="message">{message}</span>
    </div>
  );
};
