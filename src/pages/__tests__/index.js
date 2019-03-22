import React from "react";
import renderer from "react-test-renderer";
import Index from "../index";
import { indexData } from "../../test-data";

describe("Index", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Index data={indexData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});