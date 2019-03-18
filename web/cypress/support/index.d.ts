export {};
declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      addBookRecipe(): Chainable<any>;
      addUrlRecipe(): Chainable<any>;
    }
  }
}
