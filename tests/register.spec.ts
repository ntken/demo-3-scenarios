import { test, expect } from '../fixtures/custom-fixtures';
import users from '../data/users.json';
import { randomEmail, randomName } from '../helpers/dataHelper';

test('Scenario 1: Register User', async ({ homePage, signupPage, accountPage, page }) => {
  // Step 1-3: Launch browser, go to home, verify
  await homePage.goto();
  await homePage.isVisible();

  // Step 4: Click Signup/Login
  await homePage.clickSignupLogin();

  // Step 5: Verify 'New User Signup!'
  await expect(page.locator('text=New User Signup!')).toBeVisible();

  // Step 6: Enter name and email
  const user = { ...users[0], email: randomEmail(), name: randomName() };
  await signupPage.signup(user.name, user.email);

  // Step 8: Verify 'ENTER ACCOUNT INFORMATION'
  await expect(page.locator('text=Enter Account Information')).toBeVisible();

  // Step 9-11: Fill details, checkboxes
  await signupPage.fillAccountInfo(user);

  // Step 12: Fill address
  await signupPage.fillAddressInfo(user);

  // Step 13: Click 'Create Account'
  await signupPage.createAccount();

  // Step 14: Verify 'ACCOUNT CREATED!'
  await accountPage.verifyAccountCreated();

  // Step 15: Click 'Continue'
  await accountPage.clickContinue();

  // Step 16: Verify 'Logged in as username'
  await homePage.loggedInAs(user.name);
});
