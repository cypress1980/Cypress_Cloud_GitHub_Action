describe("Cypress Cloud Demo", () => {
  it("Cypress Cloud Demo -01 : Login ,Add Product Into the Cart,Remove and Logoutfrom the Site", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').clear("standard_user");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').clear("secret_sauce");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_link").click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link").click();
  });
});
