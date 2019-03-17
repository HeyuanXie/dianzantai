/**
 \* Created with IntelliJ IDEA.
 \* User: 彭诗杰
 \* Date: 2018/5/28
 \* Time: 10:10
 \* Description: orm框架sequelize帮助文件，用于数据库相关配置信息
 \*/
const Sequelize = require('sequelize');
const config = require('../lib/config');

const prod = config.get('database.prod');
const dev = config.get('database.dev');
const env = process.env.NODE_ENV || 'development';

let passwd = dev.passwd;
let host = dev.host;
if (env === 'production') {
    passwd = prod.passwd;
    host = prod.host
}

const sequelize = new Sequelize('dispatcher', 'root', passwd, {
    host: host,
    dialect: 'mysql',
    port: 3306,
    logging: false,
    omitNull: true,
    timezone: '+08:00',
    pool: {
        max: 50,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    // 仅限 SQLite
    storage: 'path/to/database.sqlite',
});

module.exports = {
    sequelize,
    Sequelize,
};

export default sequelize;
