"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scanTable = void 0;
const scanTable = async (documentClient, tableName) => {
    const params = {
        TableName: tableName,
        ExclusiveStartKey: {},
    };
    let scanResults = [];
    let items;
    console.log('INITI!!' + JSON.stringify(params));
    do {
        items = await documentClient.scan(params).promise();
        items.Items.forEach((item) => scanResults.push(item));
        params.ExclusiveStartKey = items.LastEvaluatedKey;
    } while (typeof items.LastEvaluatedKey !== 'undefined');
    return scanResults;
};
exports.scanTable = scanTable;
//# sourceMappingURL=utils.js.map