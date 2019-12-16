import * as knex from 'knex';
import { knexConfig } from './knex';

const db = knex(knexConfig);

export default db;