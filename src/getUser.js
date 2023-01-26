"use strict"

const AWS = require("aws-sdk")

module.exports.getUser = async (event) => {
  const {id} = event.pathParameters

  const params = {
    TableName: "Users",
      Key: {id}
  }

  const dynamodb = new AWS.DynamoDB.DocumentClient()
  const result = await dynamodb.get(params).promise()

  const user = result.Item

  return {
    statusCode: 200,
    body: JSON.stringify(user)
  }
}
