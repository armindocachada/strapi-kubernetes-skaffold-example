module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'cms-mysql'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'cms'),
        username: env('DATABASE_USERNAME', 'cms'),
        password: env('DATABASE_PASSWORD', 'aRandomPasswordP'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
