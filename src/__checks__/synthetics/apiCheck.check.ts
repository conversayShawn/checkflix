import { ApiCheck } from 'checkly/constructs'
import { syntheticGroup } from '../utils/check-groups'

export const catalogCheck = new ApiCheck('catalog-api-check', {
  name: 'Movie Catalog API',
  tags: ['synthetic', 'api'],
  group: syntheticGroup,
  request: {
    url: 'http://host.docker.internal:3000/api/movies',
    method: 'GET',
  }
})