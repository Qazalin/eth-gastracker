import Home from "@etherTrack/pages/test";
import { screen } from "@testing-library/react";
import { render } from "./test-utils";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);
  });

  const heading = screen.getByLabelText("first test");

  expect(heading).toBeInTheDocument();
});
