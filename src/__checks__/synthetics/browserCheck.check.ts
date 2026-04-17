import { BrowserCheck } from 'checkly/constructs'
import path from 'path'
import { syntheticGroup } from '../utils/check-groups'

export const browserCheck = new BrowserCheck('checkflix-browser-check', {
  name: 'Checkflix UI Checkout',
  description: 'Simulates a user journey through the Checkflix app, from browsing to checkout.',
  group: syntheticGroup,
  code: {
    entrypoint: path.join(__dirname, '../../tests/checkFlix-checkout.spec.ts')
  }
})