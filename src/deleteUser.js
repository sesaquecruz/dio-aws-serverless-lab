"use strict"

const AWS = require("aws-sdk")

module.exports.deleteUser = async (event) => {
  const {id} = event.pathParameters

  const params = {
    TableName: "Users",
    Key: {id}
  }

  const dynamodb = new AWS.DynamoDB.DocumentClient()
  await dynamodb.delete(params).promise()

  return {
    statusCode: 204
  }
}
