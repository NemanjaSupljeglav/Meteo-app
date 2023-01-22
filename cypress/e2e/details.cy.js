/* eslint-disable no-undef */
describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("can see details, details page has all elements", () => {
    cy.get("[datacy=autocomplete]").type("Zagreb");
    cy.wait(2000);
    cy.get(".pt-1 > .mr-auto").click();
    cy.get("[datacy=titleDetails]").should("be.visible");
    cy.contains("Meteorologic data for Zagreb");
    cy.get("[datacy=selectType]").should("be.visible");
  });
});
