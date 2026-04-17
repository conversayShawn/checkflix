import { MultiStepCheck } from 'checkly/constructs'
import path from 'path'
import { syntheticGroup } from '../utils/check-groups'

export const apiFlowCheck = new MultiStepCheck('checkflix-api-flow', {
  name: 'checkflix API Integration',
  group: syntheticGroup,
  code: {
    entrypoint: path.join(__dirname, '../../tests/api-flow.spec.ts')
  }
})