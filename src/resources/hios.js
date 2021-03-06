import AWS from 'aws-sdk'

const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-west-2' })

export async function getDocuSignApplicationTemplate(hios) {
  const { Items: template } = await docClient.query({
    TableName: 'prod-carrier-application-hios', // this data, currently only in prod, since int-docusign has nearly zero templates
    IndexName: 'Hios-index',
    KeyConditionExpression: 'Hios = :hios',
    ExpressionAttributeValues: { ':hios': hios },
  }).promise()

  return template
}
