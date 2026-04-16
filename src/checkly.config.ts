import { defineConfig } from 'checkly'
import { EmailAlertChannel, SlackAlertChannel } from 'checkly/constructs'

// 1. Define your Alert Channels
const emailChannel = new EmailAlertChannel('email-channel-1', {
  address: 'shawn@checklyhq.com',
  sendFailure: true,
  sendRecovery: true,
})

const slackChannel = new SlackAlertChannel('slack-channel-1', {
  url: new URL('https://hooks.slack.com/services/REPLACE_W_YOUR_WEBHOOK'),
  channel: '#ops-alerts',
  sendFailure: true,
})

export default defineConfig({
  projectName: 'Net-Stream Global Monitoring',
  logicalId: 'net-stream-global-monitoring',
  repoUrl: 'https://github.com/your-repo/demo',
  checks: {
    activated: true,
    muted: false,
    runtimeId: '2025.04', // Use the latest stable runtime
    // locations: ['us-east-1', 'eu-west-1'],
    privateLocations: ['demo'],
    tags: ['production', 'critical'],
    alertChannels: [emailChannel, slackChannel], 
    playwrightConfig: {
      use: {
        baseURL: process.env.ENVIRONMENT_URL || 'http://localhost:3000',
      },
    },
    // This tells Checkly to look for your Playwright Suite here
    browserChecks: {
      testMatch: 'tests/**/*.spec.ts',
    },
    checkMatch: '__checks__/**/*.check.ts',
  },
  cli: {
    // runLocation: 'us-east-1',
    privateRunLocation: 'demo'
  },
})