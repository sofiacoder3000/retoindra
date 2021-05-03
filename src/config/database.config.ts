export const databaseConfig = {
  type: (process.env.TYPEORM_CONNECTION || 'mysql') as any,
  host: process.env.TYPEORM_HOST || 'localhost',
  port: parseInt(process.env.TYPEORM_PORT) || 3306,
  username: process.env.TYPEORM_USERNAME || 'root',
  password: process.env.TYPEORM_PASSWORD || '',

  database: process.env.TYPEORM_DATABASE || 'test_nest_indra',
  autoLoadEntities: true,
  synchronize: true,
};
