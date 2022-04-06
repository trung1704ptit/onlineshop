import { render, screen } from '@__tests__/utils';
import Services from '@containers/Services';

describe('Services', () => {
  let container, getByText;

  beforeEach(async () => {
    const element = render(<Services />);
    container = element.container;
    getByText = element.getByText;
  });

  it("should render 5 items correctly", () => {
    const serviceItems = screen.getAllByRole('serviceItem');

    expect(serviceItems.length).toBe(5);
  });

  it("should render 5 items with correct text", () => {
    const text1 = getByText('Fast Delivery');
    const text2 = getByText('Secure Payments');
    const text3 = getByText('Discount Coupons');
    const text4 = getByText('Free Shipping');
    const text5 = getByText('Easy 30 Days return');


    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
    expect(text3).toBeInTheDocument();
    expect(text4).toBeInTheDocument();
    expect(text5).toBeInTheDocument();
  });
})