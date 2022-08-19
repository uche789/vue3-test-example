// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("Search title");
    cy.get("[data-id=search-input]").type("jquery in action");
    cy.get("[data-id=search-submit-button]").click();
    cy.get("[data-id=book-link]").first().click();
    cy.get("[data-id=add-to-cart]").click();
    cy.get(".cart-icon__count").should("contain.text", "1");
    cy.get("[data-id=cart-icon]").click();
    cy.url().should("match", /cart/i);
  });
});
