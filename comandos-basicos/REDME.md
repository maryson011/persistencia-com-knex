--> npm init -y
--> npm i knex
--> npm i mysql2
--> npm i jest dotenv
--> knex init
        npm i -g knex
--> knex init

--> https://knexjs.org/guide/#configuration-options
        const knex = require('knex')({
            client: 'mysql',
            connection: {
                host: '127.0.0.1',
                port: 3306,
                user: 'your_database_user',
                password: 'your_database_password',
                database: 'myapp_test',
            },
            userParams: {
                userParam1: '451',
            },
        });