import React from "react";
import renderer from "react-test-renderer";
import SectionActivities from "../section-activities";
import { activities } from "../../test-data";

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<SectionActivities activities={activities} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});