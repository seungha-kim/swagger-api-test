require('dotenv/config')
const S = require('sequelize')

const isTest = process.env.NODE_ENV === 'test'

if (isTest) {
  // http://docs.sequelizejs.com/en/v3/docs/transactions/#automatically-pass-transactions-to-all-queries
  const cls = require('continuation-local-storage')
  const namespace = cls.createNamespace('test-transaction-namespace')
  S.cls = namespace
}

const databaseUrl = isTest ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL

module.exports = new S(databaseUrl)
