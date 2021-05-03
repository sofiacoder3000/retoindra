"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
exports.environment = {
    secretKey: 'secretKey_WHICH_NEED_TO_BE_CHANGED_HA(88sdv5T@b9m<f2u+4M',
    database: {
        host: process.env.MYSQL_HOST || 'localhost',
        port: process.env.MYSQL_PORT || 3306,
        username: process.env.MYSQL_USERNAME || 'sofia',
        password: process.env.MYSQL_PASSWORD || 'sofia123',
        database: process.env.MYSQL_DATABASE || 'test_nest_indra',
        autoLoadEntities: true,
        synchronize: true,
    },
};
//# sourceMappingURL=environment.dev.js.map