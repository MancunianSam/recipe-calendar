import * as React from "react";

import { DaySelect, LocationSelect } from "../components/select";
import { InputGroup } from "../components/inputs";
import { AddRecipe } from "../components/buttons";
import { IRecipe } from "./ViewRecipePage";

interface IAddRecipePageProps {
  defaultLocation: string;
  recipes: IRecipe[];
  setRecipes: React.Dispatch<IRecipe[]>;
}

const AddRecipePage: React.FunctionComponent<IAddRecipePageProps> = props => {
  const [location, setLocation]: [
    string,
    React.Dispatch<string>
  ] = React.useState<string>(props.defaultLocation);

  const [day, setDay]: [string, React.Dispatch<string>] = React.useState<
    string
  >(new Date().toDateString());

  const [url, setUrl]: [string, React.Dispatch<string>] = React.useState<
    string
  >("");

  const [bookName, setBookName]: [
    string,
    React.Dispatch<string>
  ] = React.useState<string>("");

  const [page, setPage]: [string, React.Dispatch<string>] = React.useState<
    string
  >("");

  const [done, setDone]: [boolean, React.Dispatch<boolean>] = React.useState(
    props.recipes.filter(r => r.day === day).length > 0
  );

  const onDayChange: (day: string) => void = day => {
    setDay(day);
    setDone(props.recipes.filter(r => r.day === day).length > 0);
  };

  React.useEffect(() => {
    const isDone: boolean = props.recipes.filter(r => r.day === day).length > 0;
    if (done !== isDone) {
      setDone(isDone);
    }
  });
  return (
    <>
      <DaySelect setStateFunction={onDayChange} done={done} />

      {!done && (
        <LocationSelect
          setStateFunction={setLocation}
          defaultLocation={props.defaultLocation}
        />
      )}
      {!done && location === "web" && (
        <InputGroup
          inputs={[{ id: "url", label: "URL", setStateFunction: setUrl }]}
        />
      )}
      {!done && location === "book" && (
        <InputGroup
          inputs={[
            {
              id: "bookName",
              label: "Book Name",
              setStateFunction: setBookName
            },
            { id: "page", label: "Page Number", setStateFunction: setPage }
          ]}
        />
      )}
      {!done && (
        <AddRecipe
          day={day}
          book={bookName}
          url={url}
          page={parseInt(page, 10)}
          setRecipes={props.setRecipes}
        />
      )}
    </>
  );
};

export { AddRecipePage };
