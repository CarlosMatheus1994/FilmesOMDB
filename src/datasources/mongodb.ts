import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'mongodb',
  url: 'mongodb+srv://user_admin:0g7u4F5b2EfnNoYx@filmes.c5hai.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  host: 'filmes.c5hai.mongodb.net',
  port: 27017,
  user: 'user_admin',
  password: '0g7u4F5b2EfnNoYx',
  database: 'myFirstDatabase',
  useNewUrlParser: true
};


@lifeCycleObserver('datasource')
export class DbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }


}