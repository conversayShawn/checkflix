import { HeartbeatCheck } from 'checkly/constructs'

new HeartbeatCheck('server-pulse', {
  name: 'Express Server Heartbeat',
  period: 5,
  periodUnit: 'minutes',
  grace: 1,
  graceUnit: 'minutes',
})