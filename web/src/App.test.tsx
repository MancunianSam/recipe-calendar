import React from "react";
import { shallow, ShallowWrapper, mount, ReactWrapper } from "enzyme";
import App from "./App";
import { IInputGroupProps } from "./components/inputs/InputGroup";

describe("<App/>", () => {
  test("renders without crashing", () => {
    const app: ShallowWrapper<{}, {}, {}> = shallow(<App />);
    expect(app).not.toBeNull();
  });

  test("renders the day select", () => {
    const app: ShallowWrapper<{}, {}, {}> = shallow(<App />);
    expect(app.find("DaySelect").length).toBe(1);
  });

  test("renders the location select", () => {
    const app: ShallowWrapper<{}, {}, {}> = shallow(<App />);
    expect(app.find("LocationSelect").length).toBe(1);
  });

  test("renders the correct default input group", () => {
    const app: ShallowWrapper<{}, {}, {}> = shallow(<App />);
    const props: IInputGroupProps = app
      .find("InputGroup")
      .props() as IInputGroupProps;
    expect(props.inputs.length).toEqual(1);
    expect(props.inputs[0].id).toEqual("url");
  });

  test("renders the correct input group for book location", () => {
    const app: ReactWrapper<{}, {}, {}> = mount(
      <App defaultLocation={"book"} />
    );
    const props: IInputGroupProps = app
      .find("InputGroup")
      .props() as IInputGroupProps;
    expect(props.inputs.length).toEqual(2);
    expect(props.inputs[0].id).toEqual("bookName");
    expect(props.inputs[1].id).toEqual("page");
  });
});
