"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const awsServerlessExpress = require("aws-serverless-express");
const express = require("express");
let cachedServer;
function setupSwagger(app) {
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Nest Example')
        .setDescription('Some api examples ')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('docs', app, document);
}
const bootstrapServer = async () => {
    const expressApp = express();
    const adapter = new platform_express_1.ExpressAdapter(expressApp);
    const app = await core_1.NestFactory.create(app_module_1.AppModule, adapter);
    setupSwagger(app);
    app.enableCors();
    await app.init();
    return awsServerlessExpress.createServer(expressApp);
};
const handler = async (event, context) => {
    if (event.path === '/docs') {
        event.path = '/docs/';
    }
    event.path = event.path.includes('swagger-ui')
        ? `/docs${event.path}`
        : event.path;
    if (!cachedServer) {
        const server = await bootstrapServer();
        cachedServer = server;
        return awsServerlessExpress.proxy(server, event, context, 'PROMISE')
            .promise;
    }
    else {
        return awsServerlessExpress.proxy(cachedServer, event, context, 'PROMISE')
            .promise;
    }
};
exports.handler = handler;
//# sourceMappingURL=lambda.js.map