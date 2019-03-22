import React from "react";
import renderer from "react-test-renderer";
import ProgramHeader from "../program-header";

describe("Program Header", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ProgramHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});