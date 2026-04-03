import { defineConfig } from 'checkly'
import { EmailAlertChannel, SlackAlertChannel } from 'checkly/constructs'

const isLocal = !process.env.ENVIRONMENT_URL || process.env.ENVIRONMENT_URL.includes('localhost')

const emailChannel = new EmailAlertChannel('email-channel-1', {
  address: 'YOUR_EMAIL@domain.com',
  sendFailure: true,
  sendRecovery: true,
})

const slackChannel = new SlackAlertChannel('slack-channel-1', {
  url: new URL('https://hooks.slack.com/services/REPLACE_W_YOUR_WEBHOOK'),
  channel: '#ops-alerts',
  sendFailure: true,
})

export default defineConfig({
  projectName: 'Checkflix Global Monitoring',
  logicalId: 'checkflix-global-monitoring',
  repoUrl: 'https://github.com/your-repo/demo',
  checks: {
    activated: true,
    muted: false,
    runtimeId: '2025.04',
    ...(isLocal
      ? { privateLocations: ['demo'] }
      : { locations: ['us-east-1', 'eu-west-1'] }),
    // tags: ['production', 'critical'],
    alertChannels: [emailChannel, slackChannel],
    playwrightConfig: {
      use: {
        baseURL: process.env.ENVIRONMENT_URL || 'http://localhost:3000',
      },
    },
    browserChecks: {
      testMatch: '**/__checks__/**/*.spec.ts',
    },
    checkMatch: '**/__checks__/**/*.check.ts',
  },
})
