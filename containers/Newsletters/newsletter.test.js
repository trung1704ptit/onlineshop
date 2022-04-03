import Newsletter from "@/containers/Newsletters";

import { render, screen } from "../../test/test-utils";

describe("News Letter", () => {
  let container, getByText;

  beforeEach(async () => {
    const element = render(<Newsletter />);
    container = element.container;
    getByText = element.getByText;
  });

  it("should render head text", () => {
    const headText = getByText(/Sign Up For Newsletter/i);
    expect(headText).toBeInTheDocument();
  });

  it("should render with sub-text", () => {
    const headText = getByText(/Get E-mail updates about our latest shop and/i);
    expect(headText).toBeInTheDocument();
  });

  it("should reder 1 input search", () => {
    const input = screen.getAllByRole("newsletterInput");
    expect(input.length).toBe(1);
  });

  it("should reder 1 button submit", () => {
    const input = screen.getAllByRole("button");
    expect(input.length).toBe(1);
  });
});
