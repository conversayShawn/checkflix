import { ApiCheck, AssertionBuilder } from 'checkly/constructs'
import { syntheticGroup } from '../utils/check-groups'

const targetUrl = process.env.ENVIRONMENT_URL || 'https://checkly-demo-app.vercel.app'

export const catalogCheck = new ApiCheck('catalog-api-check', {
  name: 'Movie Catalog API',
  tags: ['synthetic', 'api'],
  group: syntheticGroup,
  request: {
    url: `${targetUrl}/api/movies`,
    method: 'GET',
    assertions: [
      AssertionBuilder.statusCode().equals(200),
      AssertionBuilder.jsonBody('$[0].title').isNotNull(),
    ],
  },
})
