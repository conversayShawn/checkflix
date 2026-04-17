import { PlaywrightCheck } from 'checkly/constructs'
import path from 'path'
import { syntheticGroup } from '../utils/check-groups'

export const playwrightCheckSuite = new PlaywrightCheck('checkflix-playwright-suite', {
  name: 'Checkflix Playwright Suite',
  description: 'Runs the Checkflix UI and API tests across multiple browsers using Playwright Test.',
  group: syntheticGroup,
  playwrightConfigPath: path.join(__dirname, '../../playwright.config.ts'),
  pwProjects: ['chromium', 'firefox', 'webkit'],
  pwTags: ['@pwcs'],
  include: ['tests/**/*'],
})
