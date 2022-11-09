import { Sequelize } from 'sequelize';

import {DB_NAME, DB_HOST, DB_USER, DB_PASSWORD} from './config';

const db = new Sequelize(DB_NAME, DB_USER , DB_PASSWORD,{
    host: DB_HOST,
    dialect:'mysql'
})

export default db;