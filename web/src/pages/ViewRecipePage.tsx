import * as React from "react";
import Axios from "axios";

interface IRecipe {
  day: string;
  book?: string;
  page?: number;
  url?: string;
}

const ViewRecipePage: React.FunctionComponent<{}> = () => {
  const getToday: () => string = () => {
    return new Date().toDateString();
  };
  const getRecipeForToday: () => Promise<IRecipe> = async () => {
    const response = await Axios.get(
      "https://sampalmer.dev/recipes-server/recipes"
    );
    const recipes: IRecipe[] = response.data["recipes"];
    console.log(recipes);

    return recipes.filter(r => r.day === getToday())[0];
  };

  const [recipe, setRecipe]: [
    IRecipe,
    React.Dispatch<IRecipe>
  ] = React.useState({ day: new Date().toDateString() });

  React.useEffect(() => {
    getRecipeForToday().then(recipe => setRecipe(recipe));
  }, []);
  return (
    <div>
      <h1>{recipe.day}</h1>
      {recipe.url && (
        <div>
          <h2>URL:</h2>
          <h2>{recipe.url}</h2>
        </div>
      )}
      {recipe.book && (
        <div>
          <h2>Book:</h2>
          <h2>{recipe.book}</h2>
        </div>
      )}
      {recipe.book && (
        <div>
          <h2>Page:</h2>
          <h2>{recipe.page}</h2>
        </div>
      )}
    </div>
  );
};

export { ViewRecipePage };
