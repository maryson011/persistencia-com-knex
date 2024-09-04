--> npm init -y
--> npm i dotenv jest knex mysql2 moment
--> knex init
--> knex migrate:make criar_tabela_estudantes
    - exports.up = async function(knex) {
        await knex.schema.createTable("estudantes", (tabela) => {
            tabela.string("matricula", 8).primary()
            tabela.string("nome", 100).notNullable()
        })
      };
    - exports.down = async function(knex) {
        await knex.schema.dropTableIfExists("estudantes")
      };
--> knex migrate:latest
--> knex migrate:rollback
--> knex migrate:make criar_tabela_livros
--> knex migrate:latest