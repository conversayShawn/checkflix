import { MultiStepCheck } from 'checkly/constructs'
import path from 'path'

export const apiFlowCheck = new MultiStepCheck('checkflix-api-flow', {
  name: 'checkflix API Integration',
  code: {
    entrypoint: path.join(__dirname, '../../tests/api-flow.spec.ts')
  }
})