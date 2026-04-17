import { HeartbeatCheck } from 'checkly/constructs'
import { uptimeGroup } from '../utils/check-groups'

new HeartbeatCheck('server-pulse', {
  name: 'Express Server Heartbeat',
  group: uptimeGroup,
  period: 5,
  periodUnit: 'minutes',
  grace: 1,
  graceUnit: 'minutes',
})