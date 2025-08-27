describe('Lazr Login', () => {
    it('✅ Valid login credentials', () => {
    cy.visit('/signin');     

    cy.get('form').within(() => {
      cy.get('input:not([type="password"])').type(Cypress.env("email"));
      cy.get('input[type="password"]').type(Cypress.env("password"), { force: true });
      cy.get('button[type="submit"]').click({ force: true });
    });
    //Assertion
    cy.url().should('include', '/marketplace');
    cy.contains(/Shipping Details/i).should('be.visible');
  });

    it('❌ Invalid login credentials', () => {
    cy.visit('/signin');

    cy.get('form').within(() => {
      cy.get('input:not([type="password"])').type(Cypress.env("email"));
      cy.get('input[type="password"]').type('Prachi123', { force: true });
      cy.contains('button', /sign in/i).click({ force: true });
    });
    //Assertion
    cy.url().should('include', '/signin');
    cy.contains(/this email \/ password combination is invalid/i).should('be.visible');
 });
});





