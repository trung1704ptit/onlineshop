describe("Navigation", () => {
  it("should navigate to the shop page", () => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=shop-link]").click();
    cy.url().should("include", "/shop");
  });

  it("should navigate to the home page", () => {
    cy.visit("http://localhost:3000/shop");
    cy.get("[data-cy=logo-link]").first().click();
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("should navigate to the cateogry page", () => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=category-link]").first().click();
    cy.url().should("eq", "http://localhost:3000/shop");
  });
});
