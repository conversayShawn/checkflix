import { UrlMonitor, UrlAssertionBuilder, Frequency } from 'checkly/constructs'
import { uptimeGroup } from '../utils/check-groups'

new UrlMonitor('checkflix-url-monitor', {
  name: 'Checkflix Local Uptime',
  tags: ['uptime', 'http'],
  group: uptimeGroup,
  frequency: Frequency.EVERY_1M,
  request: {
    // Use the Docker-to-Host bridge address
    url: 'http://host.docker.internal:3000', 
    assertions: [
      UrlAssertionBuilder.statusCode().equals(200),
    ],
  },
})