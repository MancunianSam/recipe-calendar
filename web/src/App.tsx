import * as React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { AddRecipePage, ViewRecipePage } from "./pages";
import Axios from "axios";
import { config } from "./confiig/config";
import { IRecipe } from "./pages/ViewRecipePage";

const App: React.FunctionComponent<{}> = _ => {
  const [pageName, setPageName]: [
    string,
    React.Dispatch<string>
  ] = React.useState("addRecipe");

  const [recipes, setRecipes]: [
    IRecipe[],
    React.Dispatch<IRecipe[]>
  ] = React.useState<IRecipe[]>([]);

  React.useEffect(() => {
    Axios.get(`${config.serverUrl}/recipes`).then(response => {
      setRecipes(response.data["recipes"]);
    });
  }, []);

  return (
    <div className="App">
      <Header setPageName={setPageName} />
      {pageName === "addRecipe" && (
        <AddRecipePage
          defaultLocation={"book"}
          setRecipes={setRecipes}
          recipes={recipes}
        />
      )}
      {pageName === "viewRecipes" && <ViewRecipePage />}
    </div>
  );
};

export default App;
