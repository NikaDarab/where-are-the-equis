const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'where-are-the-equis',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

