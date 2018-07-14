const configValues = require('./config')

module.exports = {
  getDbConnectionString() {
    return `mongodb://${configValues.userName}:${configValues.userPassword}@ds239071.mlab.com:39071/node_todo`
  },
}
