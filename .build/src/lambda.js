"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const swagger_1 = require("@nestjs/swagger");
const aws_serverless_express_1 = require("aws-serverless-express");
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const app_module_1 = require("./app.module");
const express = require('express');
const binaryMimeTypes = [];
let cachedServer;
process.on('unhandledRejection', (reason) => {
    console.error(reason);
});
process.on('uncaughtException', (reason) => {
    console.error(reason);
});
function setupSwagger(app) {
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Challenge INDRA SLS')
        .setDescription('By Jakeline Sofia Campos Cabello')
        .setVersion('1.0.0')
        .addTag('Tag 01')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
}
async function bootstrapServer() {
    if (!cachedServer) {
        try {
            const expressApp = express();
            const nestApp = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressApp));
            setupSwagger(nestApp);
            await nestApp.init();
            cachedServer = aws_serverless_express_1.createServer(expressApp, undefined, binaryMimeTypes);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    return cachedServer;
}
const handler = async (event, context) => {
    if (event.path === '/api') {
        event.path = '/api/';
    }
    event.path = event.path.includes('swagger-ui')
        ? `/api${event.path}`
        : event.path;
    cachedServer = await bootstrapServer();
    return aws_serverless_express_1.proxy(cachedServer, event, context, 'PROMISE').promise;
};
exports.handler = handler;
//# sourceMappingURL=lambda.js.map