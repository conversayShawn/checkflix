import { test, expect } from '@playwright/test';

const baseURL = process.env.ENVIRONMENT_URL || 'https://checkly-demo-app.vercel.app';

test('checkflix API Integration', async ({ request }) => {
  const loginResponse = await request.post(`${baseURL}/api/login`, {
    data: {
      email: 'admin@checkly.com',
      password: 'password123'
    }
  });

  expect(loginResponse.ok()).toBeTruthy();
  const loginData = await loginResponse.json();

  const checkoutResponse = await request.post(`${baseURL}/api/checkout`, {
    data: { plan: 'premium' },
    headers: {
      'Authorization': `Bearer ${loginData.token}`
    }
  });

  expect(checkoutResponse.ok()).toBeTruthy();
  const checkoutData = await checkoutResponse.json();
  console.log("Checkout successful:", checkoutData.success);
});
