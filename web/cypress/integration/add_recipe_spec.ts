/// <reference types="Cypress" />

describe("Recipes", () => {
  beforeEach(() => {
    cy.exec(
      'docker exec recipe-server sqlite3 recipes.db "delete from recipes"'
    );
  });
  it("Can add a book recipe", () => {
    cy.addBookRecipe();
  });

  it("Can view a book recipe", () => {
    cy.addBookRecipe();
    cy.visit("/");
    cy.get("#viewRecipes").click();
    cy.get(".bookForToday").contains("Book Name");
    cy.get(".pageForToday").contains("1");
  });

  it("Can add a url recipe", () => {
    cy.addUrlRecipe();
  });

  it("Can view a url recipe", () => {
    cy.addUrlRecipe();
    cy.visit("/");
    cy.get("#viewRecipes").click();
    cy.get(".urlForToday").contains("URL");
  });
});
