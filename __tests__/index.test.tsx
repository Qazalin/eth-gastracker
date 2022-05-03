import Home from "@etherTrack/pages";
import { render, screen } from "./utils/test-utils";
import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import { DefaultRequestBody, rest } from "msw";
import { EtherscanGasResultType } from "@etherTrack/types";
import { apiParamEndpoint } from "@etherTrack/utils";
import { ETHERSCAN_APIENDPOINT, GASPRICE_PARAMS } from "@etherTrack/lib";
import { MOCK_GASPRICE_RES } from "./utils/mocks";

const server = setupServer(
  rest.get<DefaultRequestBody, EtherscanGasResultType>(
    apiParamEndpoint(ETHERSCAN_APIENDPOINT, GASPRICE_PARAMS),
    (_req, res, ctx) => {
      return res(ctx.delay(100), ctx.json(MOCK_GASPRICE_RES));
    }
  )
);

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home fallback={"fallback"} />);
  });

  const heading = screen.getByLabelText("first test");

  expect(heading).toBeInTheDocument();
});

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
