// navigate to the shop page

describe("Add to cart", () => {
  it("should add product to cart", () => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=add-to-cart]").first().click({ force: true });
    cy.get("[data-cy=add-to-cart]").last().click({ force: true });
    cy.get("[data-cy=desktop-cart-total]").invoke("text").should("eq", '2');
  });
});
