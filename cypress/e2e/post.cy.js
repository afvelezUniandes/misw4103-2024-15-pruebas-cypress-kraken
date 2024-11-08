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

  it("Programar post", () => {
    cy.visit("/ghost/#/editor/post");
    cy.get("textarea[data-test-editor-title-input]").type("Nuevo Post{enter}");
    cy.wait(1000);
    cy.get('button[data-test-button="publish-flow"]')
      .contains("Publish")
      .click();

    cy.get('button[data-test-setting-title=""]').contains("Right now").click();
    cy.get("div.gh-radio").contains("Schedule").click();

    cy.get("button.gh-btn.gh-btn-black.gh-btn-large").click();
    cy.get('button[data-test-button="confirm-publish"]').click();
  });

  it("Filtrar post", () => {
    cy.visit("/ghost/#/posts");
    cy.get('div[data-test-type-select="true"]').click();

    cy.get('a[href*="published"]').click();
    cy.get(".gh-contentfilter-menu").should("contain", "Published");
  });

  it("Guardar post como borrador", () => {
    cy.visit("/ghost/#/editor/post");
    cy.get("textarea[data-test-editor-title-input]").type(
      "Post en Borrador{enter}"
    );
    cy.visit("/ghost/#/posts");
    cy.contains("Draft");
  });

  it("Cambiar estado de borrador a publicado", () => {
    cy.visit("/ghost/#/posts");
    cy.contains("Post en Borrador").click();
    cy.get('button[data-test-button="publish-flow"]')
      .contains("Publish")
      .click();
    cy.get("button.gh-btn.gh-btn-black.gh-btn-large").click();
    cy.get('button[data-test-button="confirm-publish"]').click();
    cy.contains("Published");
  });

  it("Ver post publicado en frontend", () => {
    cy.visit("/ghost/#/posts");
    cy.contains("Post en Borrador").click();
    cy.wait(1000);
    cy.get('button[data-test-button="publish-preview"]')
      .contains("Preview")
      .click();
    cy.wait(2000);
    cy.get("iframe").then(($iframe) => {
      const $body = $iframe.contents().find("body");
      cy.wrap($body).contains("Post en Borrador");
    });

    cy.visit("/ghost/#/posts");
    cy.contains("Post en Borrador").click();
    cy.get("button[data-test-psm-trigger]").click();
    cy.get('button[data-test-button="delete-post"]').click();
    cy.get('button[data-test-button="delete-post-confirm"]').click();
    cy.contains("Post en Borrador").should("not.exist");
  });
});
