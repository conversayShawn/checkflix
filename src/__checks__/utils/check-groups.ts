import { CheckGroupV2 } from 'checkly/constructs'

export const syntheticGroup = new CheckGroupV2('synthetic-checks', {
  name: 'Synthetic Checks',
})

export const uptimeGroup = new CheckGroupV2('uptime-checks', {
  name: 'Uptime Checks',
})
