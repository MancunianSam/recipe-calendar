// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("addBookRecipe", () => {
  cy.visit("/");
  cy.get("#location").select("Book");
  cy.get("#bookName").type("Book Name");
  cy.get("#page").type("1");
  cy.get("#addRecipeButton").click();
  cy.get(".checkmark").contains("\u2713");
});

Cypress.Commands.add("addUrlRecipe", () => {
  cy.visit("/");
  cy.get("#location").select("Web");
  cy.get("#url").type("URL");
  cy.get("#addRecipeButton").click();
  cy.get(".checkmark").contains("\u2713");
});
