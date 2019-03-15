import * as React from "react";

import { DaySelect, LocationSelect } from "../components/select";
import { InputGroup } from "../components/inputs";
import { AddRecipe } from "../components/buttons";

interface IAddRecipePageProps {
  defaultLocation: string;
}

const AddRecipePage: React.FunctionComponent<IAddRecipePageProps> = props => {
  const [location, setLocation]: [
    string,
    React.Dispatch<string>
  ] = React.useState<string>(
    props.defaultLocation ? props.defaultLocation : "web"
  );

  const [day, setDay]: [string, React.Dispatch<string>] = React.useState<
    string
  >("");

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
  return (
    <>
      <DaySelect setStateFunction={setDay} />
      <LocationSelect setStateFunction={setLocation} />
      {location === "web" && (
        <InputGroup
          inputs={[{ id: "url", label: "URL", setStateFunction: setUrl }]}
        />
      )}
      {location === "book" && (
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
      <AddRecipe
        day={day}
        book={bookName}
        url={url}
        page={parseInt(page, 10)}
      />
    </>
  );
};

export { AddRecipePage };
