import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {DbDataSource} from '../datasources/mongodb';

export interface ApiService {
  query(title: string): Promise<any>;
}

export class OmdbApiProvider implements Provider<ApiService> {
  constructor(

    @inject('datasources.dsOmdbApi')
    protected dataSource: DbDataSource = new DbDataSource(),
  ) { }

  value(): Promise<ApiService> {
    return getService(this.dataSource);
  }
}
