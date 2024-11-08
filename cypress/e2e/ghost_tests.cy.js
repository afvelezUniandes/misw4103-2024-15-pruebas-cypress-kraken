it("Inicio de sesión inválido", () => {
  cy.visit("/ghost/#/signin");
  cy.get('input[name="identification"]').type("wrong@example.com");
  cy.get('input[name="password"]').type("wrongpassword");
  cy.get('button[type="submit"]').click();
  cy.contains("There is no user with that email address.");
});
