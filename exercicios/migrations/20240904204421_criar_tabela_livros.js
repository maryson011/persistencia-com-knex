/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable("livros", (tabela) => {
      tabela.increments("id").primary()
      tabela.string("titulo", 100).unique().notNullable()
      tabela.string("autor", 100).notNullable()
      tabela.smallint("edicao").notNullable().defaultTo(1)
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("livros")
  };
  