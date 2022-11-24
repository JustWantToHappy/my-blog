import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
// const Op = require("sequelize").Op;
export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1667630726099_8010';
  //配置sequelize,一个ORM框架，作用类似Java中的Mybatis
 /*  config.sequelize = {
    dialect: "mysql",
    host: "localhost",
    user: "root",
    password: "101127txl",
    database: "blog",
    define: {
      freezeTableName: true,
    },
    operatorsAliases: {
      $like: Op.like
    }

  } */
  // add your egg config in here
  config.middleware = ['auth'];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
