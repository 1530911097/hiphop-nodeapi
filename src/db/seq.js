const { Sequelize } = require('sequelize');
const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PWD,
  MYSQL_DB,
} = require("../config/default");


const seq=  new Sequelize(MYSQL_DB,MYSQL_USER,MYSQL_PWD,{
    host:'sh-cdb-gv74us74.sql.tencentcdb.com',
    dialect: 'mysql',
    port: 63983, // 端口
})
module.exports = seq