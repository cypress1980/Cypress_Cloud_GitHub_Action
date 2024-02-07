/// <reference types="cypress" />
describe("UI QAAutomationLabs.com", { testIsolation: false }, () => {
    it("Open the URL", () => {
      cy.visit("https://qaautomationlabs.com/");
    });
    it("Verify Particular Blog ", () => {
      cy.contains(
        "Running End-to-End Cypress Test cases in a Google Cloud Pipeline"
      );
    });
    it("Click on Blog", () => {
      cy.contains("Blog").scrollIntoView().click({ force: true });
    });
  });