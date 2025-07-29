import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://automationexercise.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    launchOptions: {
      slowMo: 500,
    },
  },
  testDir: './tests',
  timeout: 60000,
});
