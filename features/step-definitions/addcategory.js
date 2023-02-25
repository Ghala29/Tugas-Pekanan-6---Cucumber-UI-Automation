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
When('I see a dashboard url', async () => {
  await expect(SecurePage.selector).toBeExisting();
});
When(/^I click category button$/, async () => {
    await LoginPage.btnCategory.click();
});
When(/^I click tambah$/, async () => {
  await LoginPage.btnTambah.click();
});
When(/^I Input (.+) and (.+)$/, async (nama,deskripsi) => {
  await LoginPage.inputNama.setValue(nama);
  await LoginPage.inputDeskripsi.setValue(deskripsi);
}) 
When(/^I click button simpan$/, async () => {
  await LoginPage.btnSimpan.click();
});
Then(/^I should see a(.+)$/, async (message) => {
  await expect(SecurePage.alert).toBeExisting();
  await expect(SecurePage.alert).toHaveTextContaining(message);
});





