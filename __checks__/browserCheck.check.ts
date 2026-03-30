import { BrowserCheck } from 'checkly/constructs'
import path from 'path'

export const browserCheck = new BrowserCheck('checkflix-browser-check', {
  name: 'Checkflix UI Checkout',
  code: {
    entrypoint: path.join(__dirname, '../src/checkFlix-checkout.spec.ts') // Points to your Playwright file
  }
})