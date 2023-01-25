"use strict";
const AWS = require("aws-sdk");

module.exports.getUsers = async (event) => {
    const params = {
        TableName: "Users"
    }

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const results = await dynamodb.scan(params).promise();

    const users = results.Items;

    return {
        statusCode: 200,
        body: JSON.stringify(users),
    };
}
