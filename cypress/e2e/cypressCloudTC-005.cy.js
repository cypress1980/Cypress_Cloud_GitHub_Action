describe("Login and Search functionality", () => {
  beforeEach(() => {
    cy.visit("https://ministryoftesting.com/");
    cy.get("#nav-sign-in").click();
    cy.get("#user_login").type("kailashmot@yopmail.com");
    cy.get("#user_password").type("Mot@12345678");
    cy.get('[name="commit"]').click();
  });
  it("Logs in successfully and verifies welcome Message and Logout", () => {
    cy.contains("Welcome back Kailash.");
    cy.get("#myMoT").click();
    cy.contains("My MoT");
    cy.get("#signout").click({force: true});
  });
  it("Search functionality with valid data", () => {
    cy.get("#openSearch").click();
    cy.get("#search_query").should('be.visible').type('cypress1{enter}')
    cy.contains("Cypress");
  });
  it("Search functionality with Invalid data", () => {
    cy.get("#openSearch").click();
    cy.get("#search_query").should('be.visible').type('xyz1{enter}')
    cy.contains("Sorry, no results found");
  });
});