import { TcpMonitor, TcpAssertionBuilder, Frequency } from 'checkly/constructs'

new TcpMonitor('local-db-check', {
  name: 'Local Postgres Port',
  tags: ['uptime', 'infrastructure'],
  frequency: Frequency.EVERY_1M,
  request: {
    hostname: 'host.docker.internal', 
    port: 3000, 
    assertions: [
      TcpAssertionBuilder.responseTime().lessThan(500)
    ],
  },
})