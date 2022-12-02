/* eslint valid-jsdoc: "off" */

'use strict';
const Op = require("sequelize").Op;
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1669290764348_2938';
  //安全配置
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: ['http://localhost:3000']
  }
  //token相关配置
  config.jwt = {
    secret: "CLANNAD~AFTERSTORY",
  };
  //跨域共享配置
  config.cors = {
    origin: "*",
    allowMethods: "GET,HEAD,PUT,DELETE,POST,PATCH"
  }
  // 一个ORM框架，类似于java中的mybatis
  config.sequelize = {
    dialect: "mysql",
    host: "localhost",
    user: "root",
    password: "101127txl",
    port: 3306,
    database: "blog",
    define: {
      //锁定表名称和模型名一致，不自动转为复数
      freezeTableName: true,
      /**
      * 在创建表的时候，未设置timestamps字段，则sequelize再创建表的时候会字段添加createdAt
      * 以及updatedAt字段，但是并不会在数据库中实际创建这两个字段
      */
      timestamps: false,
    },
    operatorsAliases: {
      $like: Op.like
    }
  }
  // add your middleware config here
  config.middleware = ['validite'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
