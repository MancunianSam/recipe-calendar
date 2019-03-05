import * as React from "react";
import "./App.css";
import { DaySelect, LocationSelect } from "./components/select";
import { InputGroup } from "./components/inputs";

const App: React.FunctionComponent<{}> = (props: any) => {
  const [location, setLocation]: [
    string,
    React.Dispatch<string>
  ] = React.useState<string>("web");

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
    <div className="App">
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
    </div>
  );
};

export default App;
