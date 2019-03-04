import * as React from "react";
import "./App.css";

const App: React.FunctionComponent<{}> = (props: any) => {
  const getNextSevenDays: () => string[] = () => {
    const today: Date = new Date();
    const sevenDays: string[] = [today.toDateString()];
    for (let i in [1, 2, 3, 4, 5, 6]) {
      today.setDate(today.getDate() + 1);
      console.log(`${i}, ${today}`);
      sevenDays.push(today.toDateString());
    }
    return sevenDays;
  };

  const onChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void = event => {
    setLocation(event.currentTarget.value);
  };

  const [location, setLocation]: [
    string,
    React.Dispatch<string>
  ] = React.useState<string>("web");

  return (
    <div className="App">
      <select className="app-select">
        {getNextSevenDays().map(day => (
          <option>{day}</option>
        ))}
      </select>
      <select className="app-select" onChange={onChange}>
        <option value="web">Web</option>
        <option value="book">Book</option>
      </select>
      {location === "web" && (
        <div className="inputs">
          <label htmlFor="url">URL</label>
          <input type="text" id="url" className="text-input" />
        </div>
      )}
      {location === "book" && (
        <div className="inputs">
          <label htmlFor="bookName">Book Name</label>
          <input type="text" id="bookName" className="text-input" />
          <label htmlFor="pageNumber">Page Number</label>
          <input type="text" id="pageNumber" className="text-input" />
        </div>
      )}
    </div>
  );
};

export default App;
