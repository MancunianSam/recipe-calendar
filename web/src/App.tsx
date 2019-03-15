import * as React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { AddRecipePage, ViewRecipePage } from "./pages";

interface IAppProps {
  defaultLocation?: string;
}

const App: React.FunctionComponent<IAppProps> = (props: IAppProps) => {
  const [pageName, setPageName]: [
    string,
    React.Dispatch<string>
  ] = React.useState("addRecipe");
  return (
    <div className="App">
      <Header setPageName={setPageName} />
      {pageName === "addRecipe" && <AddRecipePage defaultLocation="web" />}
      {pageName === "viewRecipes" && <ViewRecipePage />}
    </div>
  );
};

export default App;
