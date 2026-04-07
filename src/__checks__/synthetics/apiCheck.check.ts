import { ApiCheck } from 'checkly/constructs'

export const catalogCheck = new ApiCheck('catalog-api-check', {
  name: 'Movie Catalog API',
  tags: ['synthetic', 'api'],
  request: {
    url: 'http://host.docker.internal:3000/api/movies',
    method: 'GET',
  }
})