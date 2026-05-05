import { HeartbeatCheck } from 'checkly/constructs'
import { uptimeGroup } from '../utils/check-groups'

new HeartbeatCheck('server-pulse', {
  name: 'Express Server Heartbeat',
  group: uptimeGroup,
  period: 15,
  periodUnit: 'minutes',
  grace: 10,
  graceUnit: 'minutes',
})