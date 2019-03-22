import React from "react";
import renderer from "react-test-renderer";
import ProgramSection from "../program-section";
import { section } from "../../test-data";

describe("Program Section", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ProgramSection section={section} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});