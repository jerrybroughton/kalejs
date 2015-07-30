'use strict';

module.exports = {
  db: {
    connection: {
      host: '127.0.0.1',
      user: 'KALE_NAME_UNDERSCORED',
      database: 'KALE_NAME_UNDERSCORED_development'
    },
    debug: true
  },

  json: {
    pretty: true,
    spaces: 2
  },

  logging: {
    format: 'dev'
  }
};
