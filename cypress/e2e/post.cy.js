describe("Pruebas de post", () => {
  beforeEach(() => {
    cy.login(Cypress.env("username"), Cypress.env("password"));
  });

  it("Crear nuevo post", () => {
    cy.visit("/ghost/#/editor/post");
    cy.get("textarea[data-test-editor-title-input]").type("Nuevo Post{enter}");
    cy.wait(1000);
    cy.get('button[data-test-button="publish-flow"]')
      .contains("Publish")
      .click();
    cy.get("button.gh-btn.gh-btn-black.gh-btn-large").click();
    cy.get('button[data-test-button="confirm-publish"]').click();
    cy.contains("Published");
  });

  it("Editar post existente", () => {
    cy.visit("/ghost/#/posts");
    cy.contains("Nuevo Post").click();
    cy.get("textarea[data-test-editor-title-input]")
      .clear()
      .type("Post Editado{enter}");
    cy.wait(1000);
    cy.get('button[data-test-button="publish-save"]')
      .contains("Update")
      .click();
    cy.contains("Published");
  });

  it("Eliminar post", () => {
    cy.visit("/ghost/#/posts");
    cy.contains("Post Editado").click();
    cy.get("button[data-test-psm-trigger]").click();
    cy.get('button[data-test-button="delete-post"]').click();
    cy.get('button[data-test-button="delete-post-confirm"]').click();
    cy.contains("Post Editado").should("not.exist");
  });
});
