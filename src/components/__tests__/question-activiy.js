import React from "react";
import renderer from "react-test-renderer";
import QuestionActivity from "../question-activity";
import { questionActivity } from "../../test-data";

describe("Question Activity", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<QuestionActivity activity={questionActivity} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});