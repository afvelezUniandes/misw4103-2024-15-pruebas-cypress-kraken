const { Given, When, Then } = require("@cucumber/cucumber");
const properties = require("../../properties.json");

Given("Abro Ghost", async function () {
  const baseUrl = properties.BASE_URL;
  console.log("baseUrl", baseUrl);
  await this.driver.url(baseUrl + "/ghost/#/signin");
});

When("Inicio de sesión inválido", async function () {
  await this.driver
    .$('input[name="identification"]')
    .setValue("wrong@example.com");
  await this.driver.$('input[name="password"]').setValue("wrongpassword");
  await this.driver.$('button[type="submit"]').click();
});

When("Inicio de sesión válido", async function () {
  await this.driver
    .$('input[name="identification"]')
    .setValue(properties.USERNAME);
  await this.driver.$('input[name="password"]').setValue(properties.PASSWORD);
  await this.driver.$('button[type="submit"]').click();
});

Then("Debo ver mensaje {string}", async function (message) {
  const errorMessage = await this.driver.$("p.main-error").getText();
  return errorMessage;
});

Then("Debo ver el dashboard", async function () {
  const url = await this.driver.getUrl();
  return url;
});

When("Salgo de la sesión", async function () {
  await this.driver.$(".gh-user-avatar").click();
  await this.driver.$("a.user-menu-signout").click();
});

Then("Debo ver página de login", async function () {
  const url = await this.driver.getUrl();
  return url;
});

/* INICIO LISTADO DE STEPS GENERALES */

When('I enter email {kraken-string}', async function (email) {
  let element = await this.driver.$('#identification');
  return await element.setValue(email);
});
When('I enter password {kraken-string}', async function (password) {
  let element = await this.driver.$('#password');
  return await element.setValue(password);
});
When('I click next', async function() {
  let element = await this.driver.$('#ember5');
  return await element.click();
})

When(/^I click on the link with text "([^"]*)"$/, async function (linkText) {
  await this.driver.pause(1000); 
  
  let element;
  switch(linkText) {
      case "Posts":
          element = await this.driver.$('#ember19.ember-view[data-test-nav="posts"]');
          break;
      case "New post":
          element = await this.driver.$('.gh-nav-new-post');
          break;
      case "Publish":
          element = await this.driver.$('.gh-publish-trigger');
          break;
      case "Continue, final review":
          element = await this.driver.$('[data-test-button="continue"]');
          break;
      case "Publish post, right now":
          element = await this.driver.$('[data-test-button="confirm-publish"]');
          break;
      default:
          element = await this.driver.$(`//*[contains(text(), "${linkText}")]`);
  }

  await element.waitForClickable({ timeout: 5000 });
  return await element.click();
});

/* FIN LISTADO DE STEPS DE STEPS GENERALES */

/*---------------STEPS PARA POSTS------------------------------
/*----------Creacion de Post---------------------*/
When('I enter post name {kraken-string}', async function (post) {
  let element = await this.driver.$('textarea[placeholder="Post title"]');
  return await element.setValue(post);
});
When('I enter post description {kraken-string}', async function (description) {
  let element = await this.driver.$('div[contenteditable="true"]');
  return await element.setValue(description);
});

When('I click settings', async function() {
  let element = await this.driver.$('.settings-menu-toggle');
  return await element.click();
})

/*----------------validacion que los post esten en el listado d ePosts---------------*/
When(/^the post "([^"]*)" should be present in the post list$/, async function (tagName) {
  const tagList = await this.driver.$$('.posts-list');

  const tagPresent = await Promise.all(tagList.map(async (tag) => {
      const nameElement = await tag.$('.gh-content-entry-title');
      const nameText = await nameElement.getText();
      return nameText === tagName;
  }));
  const index = tagPresent.indexOf(true);
  if (index !== -1) {
      const tagToClick = tagList[index];
      await tagToClick.click();
  } else {
      throw new Error(`El tag "${tagName}" no está presente en la lista.`);
  }
});

When('And I click Publish', async function () {
  let element = await this.driver.$("//button/span[text()='Publish']");
  return await element.click();
});

/* FIN LISTADO DE STEPS PARA FUNCIONALIDAD DE POSTS*/
