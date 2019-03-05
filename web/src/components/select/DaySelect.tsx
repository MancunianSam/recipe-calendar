import * as React from "react";
import "./Select.css";

interface IDaySelectProps {
  setStateFunction: React.Dispatch<string>;
}

export const DaySelect: React.FunctionComponent<IDaySelectProps> = (
  props: IDaySelectProps
) => {
  const getNextSevenDays: () => string[] = () => {
    const today: Date = new Date(Date.now());
    const sevenDays: string[] = [today.toDateString()];
    props.setStateFunction(today.toDateString());
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
    <select className="app-select" onChange={onChangeDay}>
      {getNextSevenDays().map(day => (
        <option key={day}>{day}</option>
      ))}
    </select>
  );
};
