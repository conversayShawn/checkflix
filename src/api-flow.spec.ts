import { test, expect } from '@playwright/test';

test('checkflix API Integration', async ({ request }) => {
  const loginResponse = await request.post('http://host.docker.internal:3000/api/login', {
    data: {
      email: 'admin@checkly.com',
      password: 'password123'
    }
  });

  expect(loginResponse.ok()).toBeTruthy();
  const loginData = await loginResponse.json();

  const checkoutResponse = await request.post('http://host.docker.internal:3000/api/checkout', {
    data: { plan: 'premium' },
    headers: { 
      'Authorization': `Bearer ${loginData.token}` 
    }
  });

  expect(checkoutResponse.ok()).toBeTruthy();
  const checkoutData = await checkoutResponse.json();
  console.log("Checkout successful:", checkoutData.success);
});