import { TcpMonitor, TcpAssertionBuilder, Frequency } from 'checkly/constructs'
import { uptimeGroup } from '../utils/check-groups'

new TcpMonitor('app-tcp-check', {
  name: 'Checkflix App TCP',
  tags: ['uptime', 'infrastructure'],
  group: uptimeGroup,
  frequency: Frequency.EVERY_1M,
  request: {
    hostname: 'host.docker.internal',
    port: 3000,
    assertions: [
      TcpAssertionBuilder.responseTime().lessThan(500)
    ],
  },
})
