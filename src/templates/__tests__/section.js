import React from "react";
import renderer from "react-test-renderer";
import Section from "../section";
import { sectionData } from "../../test-data";

describe("Section", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Section data={sectionData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});