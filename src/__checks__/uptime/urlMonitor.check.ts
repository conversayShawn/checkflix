import { UrlMonitor, UrlAssertionBuilder, Frequency } from 'checkly/constructs'
import { uptimeGroup } from '../utils/check-groups'

const targetUrl = process.env.ENVIRONMENT_URL || 'https://checkly-demo-app.vercel.app'

new UrlMonitor('checkflix-url-monitor', {
  name: 'Checkflix Uptime',
  tags: ['uptime', 'http'],
  group: uptimeGroup,
  frequency: Frequency.EVERY_1M,
  request: {
    url: targetUrl,
    assertions: [
      UrlAssertionBuilder.statusCode().equals(200),
    ],
  },
})
