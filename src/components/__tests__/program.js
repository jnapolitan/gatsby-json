import React from "react";
import renderer from "react-test-renderer";
import Program from "../program";
import { program } from "../../test-data";

describe("Program", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Program program={program} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});