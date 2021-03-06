import { inject } from '@loopback/core';
import { getModelRelations } from '@loopback/repository';
import { get, getModelSchemaRef, param, post, requestBody } from '@loopback/rest';
import { ApiService } from '../Service/omdb-service';


// import {inject} from '@loopback/core';


export class FilmesOmdbController {
  constructor(
  ) { }

  @get('/query',
    {
      responses: {
        200: {
          description: "get",
          content: { 'application/json': { schema: { type: 'string' } } }
        }
      }
    })
  greet(@param.query.string('name') name: string) { return `movie ${name}` }
}
