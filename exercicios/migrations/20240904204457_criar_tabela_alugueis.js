const moment = require("moment")

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable("alugueis", (tabela) => {
    tabela.integer("id_livro").unsigned()
    tabela.string("matricula_estudante", 8)

    tabela.date("data_retirada").defaultTo(moment().format("YYYY-MM-DD")).notNullable()
    tabela.date("data_prevista_retorno").defaultTo(moment().add({days:3}).format("YYYY-MM-DD")).notNullable()
    tabela.date("data_retorno")

    tabela.foreign("id_livro").references("id").inTable("livros")
    tabela.foreign("matricula_estudante").references("matricula").inTable("estudantes")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("alugueis")
};
