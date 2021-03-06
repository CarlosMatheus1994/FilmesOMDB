import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'dsOmdbApi',
  connector: 'rest',
  baseURL: 'http://www.omdbapi.com/',
  crud: false,
  options: {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
  },
  operations: [
    {
      template: {
        method: 'GET',
        url: 'http://www.omdbapi.com/?apikey=fd4628df={title}',
      },
      functions: {
        query: ['title'],
      },
    },
  ],
};


@lifeCycleObserver('datasource')
export class DsOmdbApiDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'dsOmdbApi';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.dsOmdbApi', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
