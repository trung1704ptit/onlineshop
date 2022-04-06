import { render, screen, cleanup } from "@__tests__/utils";
import Product from ".";

describe("BestSeller", () => {
  afterEach(() => {
    cleanup();
  });

  let element;

  const product = {
    id: "56333",
    title: "Macbook",
    oldPrice: "20.00",
    currentPrice: "18.00",
    images: ["/images/products/macbook.jpg", "/images/products/charger.jpg"],
    categories: ["Laptop"],
  };

  beforeEach(async () => {
    element = await render(<Product data={product} />);
  });

  it("should render title", () => {
    const title = element.getByText(/Macbook/i)
    expect(title).toBeInTheDocument();
  });

  it("should render old price", () => {
    const title = element.getByText(/20.00/i)
    expect(title).toBeInTheDocument();
  });

  it("should render current price", () => {
    const title = element.getByText(/18.00/i)
    expect(title).toBeInTheDocument();
  });

  it("should render with first image url", () => {
    const image = element.getByAltText("product-img")
    expect(image.src).toContain(product.images[0]);
  });

  it("should render correct category", () => {
    const category = element.getByText(/Laptop/i)
    expect(category).toBeInTheDocument();
  })
});
