"use strict"

const AWS = require("aws-sdk")

module.exports.updateUser = async (event) => {
  const {id} = event.pathParameters
  const user = JSON.parse(event.body)

  const params = {
    TableName: "Users",
    Key: {id},
    UpdateExpression: "SET #usr = :usr",
    ExpressionAttributeNames: {
      "#usr": "user"
    },
    ExpressionAttributeValues: {
      ":usr": user
    }
  }

  const dynamoDB = new AWS.DynamoDB.DocumentClient()
  await dynamoDB.update(params).promise()

  return {
    statusCode: 200,
    body: JSON.stringify({
      id: id,
      user: user
    })
  }
}
