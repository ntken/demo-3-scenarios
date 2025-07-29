import { test, expect } from '../fixtures/custom-fixtures';
import contactData from '../data/contact.json';
const fileToUpload = 'data/test-upload.txt';

test('Scenario 3: Contact Us Form', async ({ homePage, contactUsPage, page }) => {
  // Step 1-3: Launch browser, go to home, verify
  await homePage.goto();
  await homePage.isVisible();

  // Step 4: Click 'Contact Us'
  await homePage.clickContactUs();

  // Step 5: Verify 'GET IN TOUCH'
  await contactUsPage.verifyGetInTouchVisible();

  await page.waitForTimeout(2000);
  // Step 6: Enter name, email, subject, message
  await contactUsPage.fillContactForm(contactData[0]);

  // Step 7: Upload file
  await contactUsPage.uploadFile(fileToUpload);

  // Step 8: Click 'Submit' and wait for alert to appear, accept alert
  page.once('dialog', async dialog => {
    console.log('Dialog message:', dialog.message());
    await dialog.accept(); // ✅ Click OK
  });
  await contactUsPage.submit();

  // Wait for alert to be handled
  await page.waitForTimeout(5000);

  // Step 9: Verify success message
  await contactUsPage.verifySuccessMessage();

  // Step 10: Click 'Home' and verify returning to home page
  await homePage.clickHome();
  await homePage.isVisible();
});
