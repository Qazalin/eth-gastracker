import { render } from "@testing-library/react";
import Home from "@etherTrack/pages";

it("renders homepage unchanged", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
