"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const AWS = require("aws-sdk");
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let dynamoDB;
if (process.env.IS_OFFLINE === 'true') {
    dynamoDB = new AWS.DynamoDB.DocumentClient({
        region: 'localhost',
        endpoint: process.env.DYNAMODB_ENDPOINT,
    });
}
else {
    dynamoDB = new AWS.DynamoDB.DocumentClient();
}
class UserRepository {
    constructor() { }
    async createUser(createUserDto) {
        const newUser = Object.assign(Object.assign({ id: uuid_1.v4() }, createUserDto), { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
        try {
            await dynamoDB
                .put({
                TableName: process.env.USERS_TABLE_NAME,
                Item: newUser,
            })
                .promise();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
        return { ok: true, data: newUser };
    }
    async getUserById(id) {
        let user;
        try {
            const result = await dynamoDB
                .get({
                TableName: process.env.USERS_TABLE_NAME,
                Key: { id },
            })
                .promise();
            console.log(result);
            user = result.Item;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
        if (!user) {
            throw new common_1.NotFoundException(`User with ID "${id}" not found`);
        }
        return { ok: true, data: user };
    }
    async getUsers() {
        let scanResults = [];
        try {
            const params = {
                TableName: process.env.USERS_TABLE_NAME,
            };
            let scanResults = [];
            let items;
            console.log('INITI!!' + JSON.stringify(params));
            do {
                items = await dynamoDB.scan(params).promise();
                items.Items.forEach((item) => scanResults.push(item));
                params.ExclusiveStartKey = items.LastEvaluatedKey;
            } while (typeof items.LastEvaluatedKey !== 'undefined');
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
        if (Array.isArray(scanResults) && !scanResults.length) {
            throw new common_1.NotFoundException(`Users not found`);
        }
        return { ok: true, data: scanResults };
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map