import { BrowserCheck } from 'checkly/constructs'
import path from 'path'

export const browserCheck = new BrowserCheck('checkflix-browser-check', {
  name: 'Checkflix UI Checkout',
  code: {
    entrypoint: path.join(__dirname, '../../tests/checkFlix-checkout.spec.ts')
  }
})