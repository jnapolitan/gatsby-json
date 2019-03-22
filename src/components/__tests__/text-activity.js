import React from "react";
import renderer from "react-test-renderer";
import TextActivity from "../text-activity";
import { textActivity } from "../../test-data";

describe("Text Activity", () => {
  it("renders correctly", () => {
const tree = renderer.create(<TextActivity activity={textActivity} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});