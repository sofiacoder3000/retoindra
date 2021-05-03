export const environment = {
  secretKey: 'secretKey_WHICH_NEED_TO_BE_CHANGED_HA(88sdv5T@b9m<f2u+4M',
  database: {
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || 3306,
    username: process.env.MYSQL_USERNAME || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || 'test-nest-indra',
    autoLoadEntities: true,
    synchronize: true,
  },
};
