import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

const pages = {
  login: LoginPage
}
Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});
When(/^I login with (.+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});
When(/^I click a button login$/, async () => {
  await LoginPage.btnLogin.click();
});
Then(/^I should see a(.+)$/, async (message) => {
  await expect(SecurePage.alert).toBeExisting();
  await expect(SecurePage.alert).toHaveTextContaining(message);
});






