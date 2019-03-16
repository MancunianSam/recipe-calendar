import * as React from "react";
import "./Select.css";

interface IDaySelectProps {
  setStateFunction: React.Dispatch<string>;
  done: boolean;
}

export const DaySelect: React.FunctionComponent<IDaySelectProps> = (
  props: IDaySelectProps
) => {
  const getNextSevenDays: () => string[] = () => {
    const today: Date = new Date(Date.now());
    const sevenDays: string[] = [today.toDateString()];
    for (let i in [1, 2, 3, 4, 5, 6]) {
      today.setDate(today.getDate() + 1);
      sevenDays.push(today.toDateString());
    }
    return sevenDays;
  };

  const onChangeDay: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void = event => {
    props.setStateFunction(event.currentTarget.value);
  };

  return (
    <>
      <label htmlFor="daySelect">Day</label>
      <select id="daySelect" className="app-select" onChange={onChangeDay}>
        {getNextSevenDays().map(day => (
          <option key={day}>{day}</option>
        ))}
      </select>
      {props.done && (
        <span style={{ fontSize: "20px", color: "green" }}>{"\u2713"}</span>
      )}
    </>
  );
};
