/* eslint-disable no-undef */
describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("has all elements", () => {
    cy.get("[datacy=navTitle]").should("be.visible");
    cy.get("[datacy=favourites]").should("be.visible");
    cy.get("[datacy=sortIcon]").should("be.visible");
    cy.get("[datacy=homeIcon]").should("be.visible");
    cy.get("[datacy=empty]").should("be.visible");
    cy.get("[datacy=mainTitle]").should("be.visible");
    cy.get("[datacy=mainTitle]").should("be.visible");
    cy.get("[datacy=autocomplete]").should("be.visible");
    cy.get("[datacy=sortIcon]").should("be.visible");
  });
  it("add and delete citys from fav list", () => {
    cy.get("[datacy=autocomplete]").type("Zagreb");
    cy.wait(2000);
    cy.get("[datacy=StarBorderIcon]").first().click();
    cy.contains("Zagreb");
    cy.get("[datacy=delete]").type({ force: true });
  });
});
