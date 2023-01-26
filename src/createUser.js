"use strict"

const AWS = require("aws-sdk")
const { v4: uuid } = require('uuid')

module.exports.createUser = async (event) => {
  const user = JSON.parse(event.body)

  const params = {
    TableName: "Users",
    Item: {
      id: uuid(),
      user: user
    }
  }

  const dynamoDB = new AWS.DynamoDB.DocumentClient()
  await dynamoDB.put(params).promise()

  return {
    statusCode: 201,
    body: JSON.stringify(params.Item)
  }
}
