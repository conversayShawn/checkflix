import { test, expect } from '@playwright/test'

test('checkflix Checkout Flow @pwcs', async ({ page }, testInfo) => {
  const target = process.env.CHECKLY_AGENT ? 'http://host.docker.internal:3000' : 'http://localhost:3000';

  // Flaky trigger logic:
  // - Browser Check (no named pw project): 40% chance — keep original behavior
  // - Playwright Check Suite: only the `chromium` project is allowed to go flaky,
  //   and only ~1 in 18 runs. `firefox` / `webkit` always use correct credentials.
  const projectName = testInfo.project.name;
  const isPlaywrightSuiteRun = ['chromium', 'firefox', 'webkit'].includes(projectName);

  let isFlakyRun = false;
  if (!isPlaywrightSuiteRun) {
    isFlakyRun = Math.random() < 0.4;
  } else if (projectName === 'chromium') {
    isFlakyRun = Math.random() < 1 / 18;
  }

  const passwordToUse = isFlakyRun ? 'password1!' : 'password123';

  if (isFlakyRun) {
    console.log('FLAKY TRIGGER: Attempting login with incorrect credentials to simulate auth error.');
  }

  await page.goto(target);
  await page.fill('#email', 'admin@checkly.com');
  
  // 2. Inject the potentially wrong password
  await page.fill('#pass', passwordToUse);
  await page.click('button:has-text("Sign In")');

  // 3. This is where the test will fail if the password was wrong
  // If the password is 'password1!', the login screen stays visible.
  await expect(page.locator('#login-screen')).toBeHidden();

  // The rest of the flow only runs if the login succeeds
  await page.click('text=GET PREMIUM PLAN');
  await page.click('#pay-btn');
  
  page.on('dialog', dialog => dialog.accept()); 
});